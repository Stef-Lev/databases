function getPopulation(cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
        `SELECT Population FROM ${cityOrCountry} WHERE Name = ${name}`,
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }
    );
}


//1)Injection

//getPopulation(`'105 OR 1=1; DROP TABLE countries;'`, name, cb)

//2) Secure function

function getPopulation(cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
        `SELECT Population FROM ${conn.escape(cityOrCountry)} WHERE Name = ${conn.escape(name)}`,
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }
    );
}
