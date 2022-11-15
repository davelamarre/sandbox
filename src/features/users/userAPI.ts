export interface Iusers {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
}

export function fetchUserAPI() {
    return new Promise<{ data: Iusers[] }>((resolve) =>
        setTimeout(() => resolve({
            data: [{
                createdAt: "2022-11-14T01:21:52.532Z",
                name: "Catherine Swaniawski",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg",
                id: "1"
            }, {
                createdAt: "2022-11-14T19:30:20.157Z",
                name: "Gerard Dickinson",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/251.jpg",
                id: "2"
            }, {
                createdAt: "2022-11-14T19:30:20.157Z",
                name: "Gerard Dickinson",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/251.jpg",
                id: "2"
            }, {
                createdAt: "2022-11-14T20:08:52.526Z",
                name: "Dawn Bechtelar",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg",
                id: "3"
            }, {
                createdAt: "2022-11-14T15:56:22.339Z",
                name: "Agnes Balistreri II",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1236.jpg",
                id: "4"
            }, {
                createdAt: "2022-11-14T02:45:53.437Z",
                name: "Veronica Hilpert",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/354.jpg",
                id: "5"
            }, {
                createdAt: "2022-11-14T00:01:07.606Z",
                name: "Clyde Goyette",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/627.jpg",
                id: "6"
            }, {
                createdAt: "2022-11-14T07:58:19.147Z",
                name: "Mr. Dallas Crooks",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/286.jpg",
                id: "7"
            }, {
                createdAt: "2022-11-14T02:32:58.126Z",
                name: "Eva Bailey",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
                id: "9"
            }, {
                createdAt: "2022-11-14T14:12:09.472Z",
                name: "Joe Hegmann",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/510.jpg",
                id: "10"
            }]
        }), 500)
    );
}
