const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;
    
    while (isRoom) {
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }
  
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
  
      let isRoom = roomsExistIds.some((roomExistIds) => roomExistIds === roomId);
  
      if (!isRoom) {
        await db.run(`INSERT INTO rooms (
          id,
          pass
        )VALUES(
          ${parseInt(roomId)},
          ${pass}
        )`);
      }
    }



    await db.close();

    res.redirect(`/room/${roomId}`);
  },
};
