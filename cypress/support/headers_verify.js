export function Headers_verify(response) {
    expect(response.headers["connection"]).to.equal("keep-alive");
    expect(response.headers["access-control-allow-credentials"]).to.equal("true");
    expect(response.headers["connection"]).to.equal("keep-alive");
//    expect(response.headers["content-encoding"]).to.equal("gzip");
    expect(response.headers["content-type"]).to.equal("application/json; charset=utf-8");
    expect(response.headers["expires"]).to.equal("-1");
    expect(response.headers["pragma"]).to.equal("no-cache");
//    expect(response.headers["server"]).to.equal("cloudflare");
//    expect(response.headers["transfer-encoding"]).to.equal("chunked");
}
export function getRand(n) {
    return Math.floor(Math.random() * n)+1;
}
