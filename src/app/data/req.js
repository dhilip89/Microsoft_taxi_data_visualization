function fire(info, caller) {
    fetch(info.url)
        .then((res) => {
            if (res.ok && caller && caller.success) {
                res.json()
                    .then((data) => {
                        caller.success(data);
                    });
            }
        })
        .catch((err) => {
            if (caller && caller.error) {
                caller.error(err);
            }
        });
}

export {
    fire
};