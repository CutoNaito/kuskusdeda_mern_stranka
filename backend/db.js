export async function selectusers(connection) {
    return await connection.execute('SELECT * FROM users');
}

export async function selectproducts(connection) {
    return await connection.execute('SELECT * FROM zbozi');
}

export async function selectorders(connection) {
    return await connection.execute('SELECT * FROM objednavky');
}


