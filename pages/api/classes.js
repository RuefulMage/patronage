import postgresql from "@/postgresql";

export default async function handler(req, res) {
    const {method} = req;


    switch (method) {
        case 'GET':
            await getClasses(res);
            return;
        case 'POST':
            await createClass(req, res);
        default:
            res.status(405).end('Method is not allowed');
    }

    res.status(200).json({ message: 'Hello from Next.js!' })
}

const getClasses = async (res) => {
    const {SchoolClass, Student} = await postgresql.getInstance();
    const classes = await SchoolClass.findAll({include: Student});

    const output = classes.map(({dataValues, Students}) => ({...dataValues, ...Students.map(({dataValues}) => dataValues)}));

    res.status(200).json({output});
}

const createClass = async (req, res) => {
    const {body} = req;

    if (!body.className || !body.students?.length) {
        res.status(400).end('Required className and students');
        return;
    }

    const {Student, SchoolClass} = await postgresql.getInstance();

    const schoolClass = await SchoolClass.create({name: body.className});

    await Promise.all(body.students.map(student => Student.create({fullName: student, SchoolClassId: schoolClass.id})));

    res.status(200).end();
}