import { NextResponse, userAgent } from "next/server";

export async function middleware(req) {
    if (req.cookies.has("uid")) {
        return;
    }
    let reader = {
        name: null,
        browserName: null,
        device: null,
        ipAddress: null,
        location: null,
        os: null,
    };
    let name = await (
        await fetch("https://random-data-api.com/api/v2/users")
    ).json();

    let ip = req.ip;
    if (!ip) {
        ip = await (await fetch("http://ipwho.is/")).json();
    } else {
        ip = await (await fetch("http://ipwho.is/" + req.ip)).json();
    }
    reader.ipAddress = ip.ip;
    reader.location = ip.country + " " + ip.region;
    reader.name = name.first_name + " " + name.last_name;
    const browser = userAgent(req);
    reader.browserName = browser.browser.name;
    reader.device = browser.device.vendor + " " + browser.device.model;
    reader.os = browser.os.name;

    let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "reader/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(reader), // body data type must match "Content-Type" header
    });
    const response = NextResponse.next();
    try {
        let uid = (await res.json()).id;
        const oneYear = 24 * 365 * 60 * 60 * 1000;
        response.cookies.set("uid", uid, { expires: oneYear + Date.now() });
    } catch (error) {
    console.log(error);
    }
    return response;
}
