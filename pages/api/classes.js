export default function handler(req, res) {
    const {body, method} = req;


    switch (method) {
        case 'GET':

        default:
            res.status(405).end('Method is not allowed');

    }

    res.status(200).json({ message: 'Hello from Next.js!' })
}

const getClasses = () => {

}