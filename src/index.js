module.exports = function reverse(n) {
    return Number(
        Array.from(String(n > 0 ? n : -n))
            .reverse()
            .join("")
    );
};
