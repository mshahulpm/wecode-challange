class RecentCounter {

    private requests: number[] = []

    constructor() {

    }

    ping(t: number): number {
        this.requests.push(t)
        this.requests = this.requests.filter(i => i >= t - 3000)
        return this.requests.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
















// class RecentCounter {

//     private last_3k_req = 0
//     private last_req_time = 0
//     private request_time_map = {}

//     constructor() {

//     }

//     ping(t: number): number {
//         this.last_3k_req++
//         this.request_time_map[t] = this.last_3k_req
//         if (t <= 3000) {
//             console.log('f');
//             this.last_req_time = t
//             return this.last_3k_req
//         }
//         if (t - this.last_req_time > 3000) {
//             console.log('s');
//             this.last_3k_req = 1
//             this.last_req_time = t
//             return this.last_3k_req
//         }
//         console.log('t');
//         this.last_req_time = t
//         return this.last_3k_req - this.find_count_of_previous_req(t - 3001)
//     }

//     find_count_of_previous_req(t: number) {

//         const min = Math.max(0, t - 3000)
//         console.log({ min, t });

//         while (t > min) {
//             if (this.request_time_map[t]) return this.request_time_map[t]
//             t--

//         }
//         return 0
//     }
// }

// /**
//  * Your RecentCounter object will be instantiated and called as such:
//  * var obj = new RecentCounter()
//  * var param_1 = obj.ping(t)
//  */
// var obj = new RecentCounter()

// console.log(obj.ping(642));
// console.log(obj.ping(1849));
// console.log(obj.ping(4921));
// console.log(obj.ping(5936));
// console.log(obj.ping(5957));
