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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","0f6e1a977cd1e4a8033260244b058b07"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","95af9acdd8207c74714d601dca898594"],["2019/11/18/JDBC基础使用/index.html","2c7ee6b57b1314eb1fcd5083254bc224"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","5119c179a3d760c52b6f256ecfef2fd5"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","27b71f08905cfc47ec46003834dd66e5"],["2020/01/22/云端MySQL安装及相关配置/index.html","a0f0ce4dbacdf7566e0122a9cc0b4bdc"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","6dba8be661a47042fcb7497f871cd0c3"],["2020/03/18/Python爬虫基础入门/index.html","c8d1df62d8d0393ac9ffcd6655483768"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","5bc71ad6252a84dfaa2b855278dc3b41"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","3650fdfd0c23526d0c2c904cef61d75c"],["2020/05/27/conda常用命令/index.html","feea29c59eb341f76f471469c18e7ff6"],["2020/08/16/Java初试MVC及三层架构/index.html","d4280e686a8c0d6d32f131cfde04e8b0"],["2020/08/20/Git的基本使用/index.html","22ba542bdaf09934c6e8ca29a61e81b1"],["2020/08/26/Redis基础案例/index.html","e0eb21ab50a554f99ecb8ac8b31e8e88"],["2020/08/27/前端之表单验证/index.html","02a41ff9648de82ff679be0ffe1193c0"],["2020/08/31/Servlet优化之功能重组成模块/index.html","7cdad0e1397d541155c4cea156c4f03e"],["2020/09/03/Java基础之Filter/index.html","0885d4a56ecdebb4dbc10f1623e29d2a"],["2020/09/05/Java基础之反射初步理解/index.html","a6589e02db586a66958626178bab4f9a"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","c513fec9ca0835504e9567b29add494f"],["2020/09/22/Spring学习笔记(全)/index.html","dc09da55793ba4ea58d0e11b7b89bd8d"],["2020/10/02/SpringMVC学习笔记记录/index.html","e2d327a9e2aa7abafa40b91d09401ff7"],["2020/10/14/Java基础之IO流/index.html","5bfedb2a21e2a6eea3008338da214587"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","b1f96a881a2068db6023807d818b49cc"],["2020/11/15/Springboot自定义starter/index.html","f5ed564d013036d0d121f4b06a4c011d"],["2020/11/18/ssm框架的整合/index.html","b93d59f73f4f39d61ca0dd4fd7b1b405"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","b86b8b5c63b1c5e9016eba0151880703"],["2020/11/27/Servlet执行原理浅谈/index.html","2d6d36da8330f3bbf72d5bb3694c7f9b"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","03ca2b644489592b5797682d2902a1bb"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","e183929075dd062e024a38284fc74b51"],["2021/03/17/初探并查集/index.html","cc2831f17eb13c85551ede5ec7ac3763"],["2021/03/18/数组中第K大问题之堆排序/index.html","075b51a360057f61ad95783c7f5a1b9f"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","73e92fb99ad91a1def4e9d134eb68367"],["2021/05/16/设计模式-依赖倒置原则/index.html","76c0c5c279fa072eeea9400a9d624d5d"],["2021/05/16/设计模式-单一职责原则/index.html","4d5bd9b07c9cef90407835f830b729f8"],["2021/05/16/设计模式-组合优于继承原则/index.html","c915f8c707e27372b57121228e2e29e2"],["404.html","8994a83cd9c9cb427940b3600708d844"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","767bb6113316fa937d1ed7312e8065d3"],["archives/2019/08/index.html","fb491db2066515fa74566ba190ec3949"],["archives/2019/10/index.html","950cbf56083d7b5aeb0b6fb5181892c4"],["archives/2019/11/index.html","4c1125d5a9b2f8054316781e307f38fa"],["archives/2019/12/index.html","1974f04d4e2035e9fe95bc9dc1548fad"],["archives/2019/index.html","d16788674b700e3e18e118efe2b1c27e"],["archives/2020/01/index.html","e5d64732ac8eca78e2175b78b8388c63"],["archives/2020/02/index.html","6ccd545a55f69f94a62740a8e6bb440b"],["archives/2020/03/index.html","f2e73ec041aced2c8e1eb13f48c64484"],["archives/2020/04/index.html","9252b6e45619b1fab18b9867f013cb75"],["archives/2020/05/index.html","4197a9480cbe29669bec67f55d02928e"],["archives/2020/08/index.html","2ebedb55df89015e8889f94c0b930a9e"],["archives/2020/09/index.html","8a0410e501290716558e9b451550cbdf"],["archives/2020/10/index.html","7cefc32a6072002994bd6eb689ea9eeb"],["archives/2020/11/index.html","6bb7226afb74a3d68605479ede7d780c"],["archives/2020/index.html","295456c87f9bc60a01893ccfb0081480"],["archives/2020/page/2/index.html","7cbe0883358b94d8c202185b67305073"],["archives/2020/page/3/index.html","b5f85fd4f8eb9fcd3ce5990b1e599355"],["archives/2021/03/index.html","d3b3886a3eede746c11783cf1e1818be"],["archives/2021/05/index.html","3d6d35880c5e759da3f02ee0b21f5a9e"],["archives/2021/index.html","f1d7c86c323eeb593ed2f20d011f18de"],["archives/index.html","127d0b4d8a420c276c4487b35696ff06"],["archives/page/2/index.html","127d0b4d8a420c276c4487b35696ff06"],["archives/page/3/index.html","ef160c2ccfb7859cba6fc14fbe06b578"],["archives/page/4/index.html","127d0b4d8a420c276c4487b35696ff06"],["categories/Java/index.html","64ca8d679d61e40d41bf8ba21340c8bf"],["categories/Java/page/2/index.html","410c3f4abd66a96701e14524569d7d0e"],["categories/Java/框架/index.html","e73f6b44283168e08350b58b93629278"],["categories/Linux/index.html","0922a2aeb76aa376c8d1b6245f24e794"],["categories/Machine-Learning/index.html","35c91ec2afd4faa07a97ba8835e40907"],["categories/Machine-Learning/sklearn/index.html","751260ee88c717eac6bfa317b4914f23"],["categories/Mongodb/index.html","1bfd6f47051d9ff6cdf46afd85556978"],["categories/Nginx/index.html","bfdf3923a16e2ba2e6ad433cbfb53187"],["categories/Python/index.html","ef0c05148c2bf717527498fd7711b318"],["categories/Python/爬虫/index.html","71e3a5e2bed1c27d62730c38b82efc64"],["categories/git/index.html","0632b2b2ff437e2695fdbeec829b1ea5"],["categories/index.html","75689a26d0ab6ec646f7932e2a1c649c"],["categories/前端/index.html","a8fe7ef5e96eb94f78f22138ec5a1deb"],["categories/数据结构与算法/index.html","5044546d0cbda66f4abca4773b520cbe"],["categories/设计模式/index.html","ac1b67914b8cf0d94272c485f5b74bd6"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","a532126c73c65912a8ce91a539fbbab1"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","83e6edc5b5face95f7ae029493cea5ab"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","c9e656c4b0c821cdf9462ff7694093c4"],["page/2/index.html","2d81784248b8fd1bfbbc53465b63149f"],["page/3/index.html","bbbdaf3f8d5831e4c747c0dfd736d2a1"],["page/4/index.html","c0e7213458db177fe96c47af43964dc1"],["photos/index.html","c808fa288f19690a9ea4d4b8f400ff80"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","bbc880d86591446eae043331f8377088"],["tags/Beautifulsoup/index.html","0736dcffc7611aedd65160d6c1f7b432"],["tags/Data-Preprocessing/index.html","9aaa273ad81afc83a83349c3c040e343"],["tags/DecisionTree/index.html","5ee1a957a34251c70dfc820d317a9ef7"],["tags/Feature-Engineering/index.html","6842f161b731428f97322592d7943244"],["tags/Filter/index.html","0f992c1ee498856c6a1d65989772baed"],["tags/IO流/index.html","925185f8f305bfbf04a7c0df09bc7d48"],["tags/JDBC/index.html","88d04e057f60e41e2c199a0af7beac29"],["tags/JQuery/index.html","4f29e2eb4bcde3733d727f0f6698178e"],["tags/Java/index.html","d956dfdfe0f490baf354315c01910fa9"],["tags/JavaScript/index.html","dc920f4a11ffee725c07e49fcd9702c4"],["tags/JavaWeb/index.html","cf2aa2fe1e967d9424767efcaa5ffad1"],["tags/Kaggle/index.html","763138ff3b5d69c274ed4896f4ee0744"],["tags/Linux/index.html","df26f31826fcc291cf30fa4381db6f92"],["tags/MBG/index.html","d8a4b09b05520a3a098ddb35fcf94fc2"],["tags/MVC/index.html","c07e061510afe15e54f38e4ed4e04e6a"],["tags/Mapper/index.html","11ff2ceb970aba3d9ce2ab75da8d7954"],["tags/Mongodb/index.html","34ba890efe60aa8f17952831a43f15c2"],["tags/MySQL/index.html","51b19b20b913c2f1c5955cf55a07fde3"],["tags/Mybatis/index.html","65e303e2850b5b23b1aad9f3e6ff1366"],["tags/Nginx/index.html","a1d19c1b350a7485ca6803768ddb5523"],["tags/Python/index.html","e6a9177e272b9ecd042ec54fdf1bbbd7"],["tags/Request/index.html","83cb6df175974c8904ec74f492bbf19e"],["tags/Servlet/index.html","a3f0804064170c1a0ca3f496dde7afeb"],["tags/Spring/index.html","3599a4c3c14550fe4c08c03defae681c"],["tags/SpringMVC/index.html","f13301c79ad1347ff315e4f346a29db6"],["tags/Springboot-starter/index.html","a479faa3e8ba95b5bb2a687021c02aaf"],["tags/VMware/index.html","941ce471070b256b38cf517ad08b7118"],["tags/conda/index.html","534be8c611ca8eba3a79214862cbdf7b"],["tags/git/index.html","9858438f614068c57ed22a8a474276d1"],["tags/hexo/index.html","805320513f3607733a8ab6de06cdb752"],["tags/index.html","1a6a360283054e7edd902fa4222d10d1"],["tags/redis/index.html","00a16b2b78fe5a9059612250e32a98a3"],["tags/sklearn/index.html","3000d2fd6e2c337bcac97a1a0c248f38"],["tags/ssm/index.html","fb759539c134b8809c2978f23291b560"],["tags/依赖倒置原则/index.html","5ac626221edc811a25a96f1fa423f324"],["tags/动态代理/index.html","b6d142b6c82c9254f643016d61f786a4"],["tags/单一职责原则/index.html","fb4f22f115619696426e4620fcd8d96d"],["tags/反射/index.html","1dbf435eefbb34413eb302b764c4c7c1"],["tags/堆排序/index.html","cf4c3b40e5da9f830990327cf49944d0"],["tags/并查集/index.html","fddeec9159d330b3ca7ebf99e300a498"],["tags/正则表达式/index.html","eee1b8ad42710b60f630be45eb09ff85"],["tags/源码/index.html","df802d0f345f66a22fa231f07bbee410"],["tags/爬虫/index.html","6e5c371f8a880b46fe5f279013a2d6f1"],["tags/组合优于继承原则/index.html","4c459cb0a8ae9e1600ad655e8271811f"],["tags/表单验证/index.html","71e36f00ea582ca9cac828fe69588fe7"],["tags/设计模式/index.html","96dce94e365896c1b8e52b1abddd842a"]];
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







