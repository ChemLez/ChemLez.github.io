/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","54bc1a62b35ba61904b3b3586ad22521"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","60af77db3f97c9ae16b9e11d1827a6f3"],["2019/11/18/JDBC基础使用/index.html","17f9bfd7e9385b8abbbac392581b2be3"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","ab632896f82062b4224f29822cb21f5d"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","a50fe314f921074fd08425ea4f901a74"],["2020/01/22/云端MySQL安装及相关配置/index.html","a08859b66e468c368cf2f67e3f3b53bf"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","e7d5d4b29b9dc7ef159da36041f9ef4a"],["2020/03/18/Python爬虫基础入门/index.html","04fa5b243d323c55b4d41c48d1ded9aa"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","f3df64e1cb19191d8ec566ec870d5371"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","a4f8999f0d755f40cf096c3b1302f8d1"],["2020/05/27/conda常用命令/index.html","c424945fc46e3de568f9d90addb4a6d5"],["2020/08/16/Java初试MVC及三层架构/index.html","e7ecd22f2851b29d9120ec0b2ab9d77a"],["2020/08/20/Git的基本使用/index.html","4a818f5088fd488db6daa3317f1c361d"],["2020/08/26/Redis基础案例/index.html","94a43632f0c487edafd8b02aefc1ff2e"],["2020/08/27/前端之表单验证/index.html","e07c228d7c301f2f10abee5211f9da58"],["2020/08/31/Servlet优化之功能重组成模块/index.html","30d4fb23c3c6a475baabe3225b9e7295"],["2020/09/03/Java基础之Filter/index.html","a92108b8e7a7b9522d5e039bdb365805"],["2020/09/05/Java基础之反射初步理解/index.html","61116f9d692c70811102b5c276e2da5d"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","3734a890b637906447532d4133aee734"],["2020/09/22/Spring学习笔记(全)/index.html","ab505baad0493c6ff3983f20c448ba93"],["2020/10/02/SpringMVC学习笔记记录/index.html","1f868e2f22be9107f4a87eb3b0913411"],["2020/10/14/Java基础之IO流/index.html","ecf12db82a7564f07c3d4595d73c16f0"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","eb0603de4eda7eaa454e84f62d0ae6f6"],["2020/11/15/Springboot自定义starter/index.html","53a9d8f4eeafa3483c3ec7fa11a0b68c"],["2020/11/18/ssm框架的整合/index.html","e104379b35a30c15f22a8e7d42eea162"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","cb16dd3f63d9ba707fed152ce7f93bc8"],["2020/11/27/Servlet执行原理浅谈/index.html","93946bc76d1cfa9b2d517c425e5fe380"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","212a6b458a192ac759075817065619a6"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","9f4e3d7eb5254558995d45f29fa2eea8"],["2021/03/17/初探并查集/index.html","48d80d2288461250cd43b279ab122762"],["2021/03/18/数组中第K大问题之堆排序/index.html","19bc658c29f767727a5171bce00fc9c4"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","aaf7e523b7e077dc10955fe6d1ce8886"],["2021/05/16/设计模式-单一职责原则/index.html","40a19299361d385174daa1204e506e2b"],["2021/05/16/设计模式-组合优于继承原则/index.html","fa8f3c2d32e07cd77c69e7f64a49f82b"],["404.html","8994a83cd9c9cb427940b3600708d844"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","767bb6113316fa937d1ed7312e8065d3"],["archives/2019/08/index.html","79cbb44a5f4704b54a9ddb9c9425c287"],["archives/2019/10/index.html","d3a41406ff383997901222ac4046c2a6"],["archives/2019/11/index.html","1eea1f6b92ad43f5ab105c3744de5074"],["archives/2019/12/index.html","d905a59e9e99d1e722721e05ca0a3154"],["archives/2019/index.html","c197b3db996e05c101304b0f75b24e7b"],["archives/2020/01/index.html","6b52ca0754ab98a8283474769b14322b"],["archives/2020/02/index.html","f2882c043e2f5becbdb92399c38f1360"],["archives/2020/03/index.html","2449888e851192f815112fe4d2d70ce1"],["archives/2020/04/index.html","3f75286edead06043c445d7befb5f7cd"],["archives/2020/05/index.html","561017a841f8bae20ef398b49f996151"],["archives/2020/08/index.html","762fde783bc02121c78795ba7500a399"],["archives/2020/09/index.html","67aff94ea7359048ccf83e26f9d29699"],["archives/2020/10/index.html","de54b72bcbaf2a12b426b57ea1339cfd"],["archives/2020/11/index.html","1a06c447164c8a8434d2041bf29ffa93"],["archives/2020/index.html","f32b1dc30825a3fe33ac8db60802f2dd"],["archives/2020/page/2/index.html","8ebdc2de12a2cc2540e7f8f694d63b20"],["archives/2020/page/3/index.html","418dee2500d2e7dc32612bdf4cb548dc"],["archives/2021/03/index.html","6dcfd9eae0cb4153043e04e0b00c0122"],["archives/2021/05/index.html","55d905f181d8af460951f1aebb57a9d7"],["archives/2021/index.html","a02167a873d8f93f3e1ebe034d413f04"],["archives/index.html","51244a9217b0ea6a2e45901659a4cf82"],["archives/page/2/index.html","51244a9217b0ea6a2e45901659a4cf82"],["archives/page/3/index.html","974205ccfc1920cebfd09e64628a32a0"],["archives/page/4/index.html","51244a9217b0ea6a2e45901659a4cf82"],["categories/Java/index.html","b655a10eb485cfcb7d2c76f47b971b95"],["categories/Java/page/2/index.html","141880e171d6640dd5221cdf13c31426"],["categories/Java/框架/index.html","baf9edcf2a935b0e6a1269908bf2c919"],["categories/Linux/index.html","c23b9a6bfe4179892d23b967716b9e17"],["categories/Machine-Learning/index.html","fa17f7fb3dcb1f8a040b29f560086383"],["categories/Machine-Learning/sklearn/index.html","e22bb0654d3fba7f69068f78ac8d5100"],["categories/Mongodb/index.html","7cb2cd76e7cdcebeda20a6ee801e7827"],["categories/Nginx/index.html","82c476a56132fb5b5354c130ced4e006"],["categories/Python/index.html","84606e0645825f0fc1ed32d92728e94c"],["categories/Python/爬虫/index.html","63ea7d45aaac27943f07f0c4d74c3e61"],["categories/git/index.html","6f86c14f643c75e92e9ffdf2e51a2eb0"],["categories/index.html","37e9f7bcc4f4057535b256302357d5d8"],["categories/前端/index.html","76695903ce9f81a11823febd62265bb9"],["categories/数据结构与算法/index.html","6440670e992315650f570aeb39f7b092"],["categories/设计模式/index.html","69fb956d612a71f4b266d3d5f7af6ea0"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","d06a803176676d423811a3d1dcffe32b"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","c1e44b3272abef8210ba28405a3aaa52"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","5c8b584a769372ee4d22a64012a923af"],["page/2/index.html","43d8c53a803aa268654f58b0676af0ec"],["page/3/index.html","42e31b078d1ce23c5d4687933c9294e3"],["page/4/index.html","b8036eef14badac6cf5f7554fd6cb0c0"],["photos/index.html","cc595f195b91072a22f80a5cd1ef9956"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","7a3d557202eb2a9b97a595a45e41df37"],["tags/Beautifulsoup/index.html","53817182a480ef42fc9b353d36e265f1"],["tags/Data-Preprocessing/index.html","bbeb7e447d155e260dfa8ab3f261925c"],["tags/DecisionTree/index.html","0adf8e87edf2b808047682d31809306e"],["tags/Feature-Engineering/index.html","abd79e6e59b2d3b10de723e52be781f9"],["tags/Filter/index.html","2458179937bf87cfe8d13eef42a9067f"],["tags/IO流/index.html","f4da7f154296e55c7ca8dc15c9f17a38"],["tags/JDBC/index.html","eb5dbc924195b3f1df352ddee7c19c1c"],["tags/JQuery/index.html","f552d8de59983ee601422da50b21ca77"],["tags/Java/index.html","466c1e54fc849fbaed4fe56b2a186c21"],["tags/JavaScript/index.html","ea0205d5089aef1a586dcf2f089c7859"],["tags/JavaWeb/index.html","83b0c745b573b5607729276a996d4329"],["tags/Kaggle/index.html","b7ee91affa76882f3c6b5e8b9578dc42"],["tags/Linux/index.html","ac62176db35898d60123588fa8dcc025"],["tags/MBG/index.html","bbbb523361c69b2a6393631b342d7e18"],["tags/MVC/index.html","f41e1ff58153636b885202fbd5867a12"],["tags/Mapper/index.html","2872f3617385ba7792472e1062ae2da8"],["tags/Mongodb/index.html","ac2cc70e64c3e93c49608291daa3750b"],["tags/MySQL/index.html","5137c1cb98da195ddeb13aedde962e95"],["tags/Mybatis/index.html","8adf6f5f9add4a632c390c6b05a13b04"],["tags/Nginx/index.html","d773edcd05a6c2a70e40af8d06c84705"],["tags/Python/index.html","e58616275859a9346cd8d0a0b25a6cb5"],["tags/Request/index.html","eb4fd4cdab48d37dc1ef9c4999d714f0"],["tags/Servlet/index.html","26084bed58d53d3744556ddb445211da"],["tags/Spring/index.html","230aaa793181b226978f04498668b483"],["tags/SpringMVC/index.html","2729e42f896e2c80f1fb54855176d512"],["tags/Springboot-starter/index.html","1cb63085799364bfca9d60296890a293"],["tags/VMware/index.html","4c3a71038b9b7566de5f89e916afeca4"],["tags/conda/index.html","1b1a4c38f9ba7b13abc9920648d9f345"],["tags/git/index.html","6d3eb447e5b976d08cf244e718c2eb85"],["tags/hexo/index.html","8a8cbe9176080cfbf13dd441cd391ab9"],["tags/index.html","c6f8858b58aad962844ef5836ef2d8ce"],["tags/redis/index.html","ec8bd0d4fa96d290af1101c9d992ddbc"],["tags/sklearn/index.html","dd8076110c1f2ab5499025e30a2e47ab"],["tags/ssm/index.html","05761ed1fb827030dd1852774f26d0ce"],["tags/动态代理/index.html","ce5ec29df5a6777ddb3af31551da1c85"],["tags/单一职责原则/index.html","744e69f7275d1d1a93d7307bbf1083e5"],["tags/反射/index.html","8c64ac4efe81c2e64b6deca53d05fc09"],["tags/堆排序/index.html","fe4ed904726ae228c317eab2d9a13161"],["tags/并查集/index.html","1de7239c7c1c5fc3263b8fc687e12e28"],["tags/正则表达式/index.html","386d278cd4edf5d191c77dfc82385589"],["tags/源码/index.html","aea1dfb8046a7f284168424d448418c0"],["tags/爬虫/index.html","d151a6d34d7d915a8ab512e3eec95e9e"],["tags/组合优于继承原则/index.html","abd52552c7c56a0641e33f9d8c589216"],["tags/表单验证/index.html","3136b37cbcef52f3565392cf6cd056ec"],["tags/设计模式/index.html","47df678ed71377a072fc85b503990a96"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







