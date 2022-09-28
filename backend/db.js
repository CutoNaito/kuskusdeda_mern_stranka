export async function testquery(connection) {
    return await connection.execute('SELECT * FROM test');
}

