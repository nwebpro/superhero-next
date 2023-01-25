import dbConnect from "../../../db/dbConnect";
import Hero from "../../../model/Hero";

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const heros = await Hero.find({})
                res.status(200).json({
                    success: true,
                    data: heros
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const heros = await Hero.create(req.body)
                res.status(200).json({
                    success: true,
                    data: heros
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
    
        default:
            res.status(400).json({ success: false })
            break;
    }
}