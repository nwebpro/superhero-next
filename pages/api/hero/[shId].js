import dbConnect from "../../../db/dbConnect";
import Hero from "../../../model/Hero";

dbConnect()

export default async (req, res) => {
    const { query: { shId }, method } = req

    switch (method) {
        case 'GET':
            try {
                const hero = await Hero.findById(shId)
                if(!hero) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({
                    success: true,
                    data: hero
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'PUT':
            try {
                const hero = await Hero.findByIdAndUpdate(shId, req.body, {
                    new: true,
                    runValidators: true
                })
                if(!hero) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({
                    success: true,
                    data: hero
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'DELETE':
            try {
                const hero = await Hero.deleteOne({ _id: shId })
                if(!hero) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({
                    success: true,
                    data: hero
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