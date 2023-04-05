//const googleapikey = "AIzaSyD7_ouFXt3sf1qziJ0TmFj29mJj4_D2xUY-O274gFc0SF9-FCAzM"

export const vidoeListApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyB4zwQEOvfkv5RIWvfk9bM8Hxh8i7rQhNs"

export const searchSuggetionsAPi = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="

export const live_chat_count = 10;

export const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const isPrime = n => {
       let i = 1, p = primes[i],
       limit = Math.ceil(Math.sqrt(n));
       while (p <= limit) {
          if (n % p === 0) {
             return false;
          }
          i += 1;
          p = primes[i];
       }
       return true;
    }
    for (i = 2; i <= num; i += 1) {
       while (!isPrime(n)) {
          n += 2;
       }
       primes.push(n);
       n += 2;
    };
    return primes[num - 1];
 }
