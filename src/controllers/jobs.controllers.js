import { getConnection } from "./../database/database";

const getJobss = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, task, Number_of_workers FROM condominios");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getJobs = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, task, Number_of_workers FROM condominios WHERE id = ?", [id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addJobs = async (req, res) => {
    try {
        const { task, Number_of_workers } = req.body;

        if (task === undefined || Number_of_workers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        } else {
            const jobs = { task, Number_of_workers };
            const connection = await getConnection();
            const result = await connection.query("INSERT INTO condominios SET ?", jobs);
            res.json({ message: "Task added" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateJobs = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, Number_of_workers } = req.body;

        if (id === undefined || task === undefined || Number_of_workers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        } else {
            const jobs = { task, Number_of_workers };
            const connection = await getConnection();
            const result = await connection.query("UPDATE condominios SET task = ?, Number_of_workers = ? WHERE id = ?", [task, Number_of_workers, id]);
            res.json(result);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteJobs = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM condominios WHERE id = ?", [id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getJobss,
    addJobs,
    getJobs,
    deleteJobs,
    updateJobs
};
