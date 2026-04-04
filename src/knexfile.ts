export default {
    client: "sqlite3",
    connection: {
    filename: "./src/database/databese.db",
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations",
    },
}