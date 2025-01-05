import app from "./app";
import connectToDB from "./config/db";

const startServer = async (): Promise<void> => {

    await connectToDB();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => console.log(`Server is started and is listening on port ${PORT}`));

}

startServer()
    .catch(error => console.error("Failed to connect to the server and got this error", error));



