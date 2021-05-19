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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","cea096ed66d7445e1b5892af023d3831"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","408e859fcb9a5ade223f283e9b128a1f"],["2019/11/18/JDBC基础使用/index.html","e4f57aefbcb0f3b4247bcbd3e4685e93"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","e7a06fcedd14d682543940cc01acf3e2"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","adf952ab4c583db51514b5c13c28922f"],["2020/01/22/云端MySQL安装及相关配置/index.html","042eab731e31fbe4fa5195c2b5589898"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","4cc7ec39e718828c2a64bd53bca53b6c"],["2020/03/18/Python爬虫基础入门/index.html","3d2ad8b5e6fa5a1db4a7e3ef172a5b50"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","9c02937b66ea1edc52365f66bd93a8ae"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","bfae645971dd54553fcf40a14047a8a4"],["2020/05/27/conda常用命令/index.html","aa4fdabc9879a1329be96604401b932b"],["2020/08/16/Java初试MVC及三层架构/index.html","acbc8508037c56cc60cc7f71f9b8da3c"],["2020/08/20/Git的基本使用/index.html","6a07ef1b01a6c69ab1f0b4ed0f67aa88"],["2020/08/26/Redis基础案例/index.html","ece364cb90dde4ca18ea50a15a5a9778"],["2020/08/27/前端之表单验证/index.html","c4d22c82947a1158fa07c6d290c9fc39"],["2020/08/31/Servlet优化之功能重组成模块/index.html","a8ef63fabac4ad78d062c43353342059"],["2020/09/03/Java基础之Filter/index.html","7d876cd7481391209be60c8148ee6f3d"],["2020/09/05/Java基础之反射初步理解/index.html","b1a538729be2e85e7aba35a9bc8b94be"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","c70b03e9db1b5dfe7f9030938e0be5b5"],["2020/09/22/Spring学习笔记(全)/index.html","c7cc38f469d3b32fb687e4f3f9bdfb4b"],["2020/10/02/SpringMVC学习笔记记录/index.html","3375e4f746adabc620b94c68793d9776"],["2020/10/14/Java基础之IO流/index.html","1e9a73eb57adbe76cef0e4f7d656cec9"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","ca051fab3f69699f899c8c84f8279b6b"],["2020/11/15/Springboot自定义starter/index.html","56f009c3b3e04c8aff6aef6e7618dc19"],["2020/11/18/ssm框架的整合/index.html","0044dcb401955dca5da8428590b70f07"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","91fb91538f175b3a3e7fa75be370a18a"],["2020/11/27/Servlet执行原理浅谈/index.html","1cd6f3288d954ff9f9f45c3e75c8e310"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","7f670990fb9f6ba4c88d4323c20f4598"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","7dc6dc65994df8acb024583046566228"],["2021/03/17/初探并查集/index.html","9ca55a476c62fa8a77193e43715cb58d"],["2021/03/18/数组中第K大问题之堆排序/index.html","8dbb78a1d98828d45394c2ca0189ccc9"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","b54603c73bcded642b518c0c7a1f5088"],["2021/05/16/设计模式-依赖倒置原则/index.html","f19babe19c031e40d9bec8c9eb78d36d"],["2021/05/16/设计模式-单一职责原则/index.html","13fd7c33f488bf9aee693cdd432af030"],["2021/05/16/设计模式-组合优于继承原则/index.html","40eec97a00f8a89dc8a5d91f40bd78d8"],["2021/05/18/设计模式之原型设计模式/index.html","bf385ed0135117f8aac1415277613327"],["404.html","3b4f8ad841d356539336a3d355c4d068"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","a05366b76425c1fe0246541d519fbb86"],["archives/2019/08/index.html","3f519a6e578ba5118a68902e5c32a8a4"],["archives/2019/10/index.html","5ed297c1253346c93ede13e4fa907ebf"],["archives/2019/11/index.html","23af97ea560bb1a054c0eb78ddc00bab"],["archives/2019/12/index.html","8c7a136a74d487e8e338a52ae74d36d3"],["archives/2019/index.html","ceb0efceb7135f4cb496e8eed65bc126"],["archives/2020/01/index.html","5b47694dd378025cf00cb30282cb72a5"],["archives/2020/02/index.html","c4c8d0490222beeb9f5c37395fba685b"],["archives/2020/03/index.html","9a4085cc2cb3305980017c777f839881"],["archives/2020/04/index.html","f79d0419a796f9e73c746927f3657ddc"],["archives/2020/05/index.html","b469ed3ee0a8f3cef593f3ac3bece252"],["archives/2020/08/index.html","f7ee7c3fdbc376763a4a09581c861914"],["archives/2020/09/index.html","15fefc3b22758b9f01c903d91b43cf69"],["archives/2020/10/index.html","3fbbab8e1faca7cf3a1e1b44207a6169"],["archives/2020/11/index.html","ec9d3b4fe64ece98c718d981cba1f5ab"],["archives/2020/index.html","cc5da7a758555ecaa76791d42de2bf78"],["archives/2020/page/2/index.html","b615f845fca71ff58efef4ceff556584"],["archives/2020/page/3/index.html","3409f62bde380b7a41a025f253f25f59"],["archives/2021/03/index.html","fc890fd78f23a34ddef53872afba8c23"],["archives/2021/05/index.html","1a13b95fca73a30d2a3bc2489985fe48"],["archives/2021/index.html","e6d7a0da7a09180740434f86e4524c3c"],["archives/index.html","2fcc4d3e08571fe897697937641f17c2"],["archives/page/2/index.html","2fcc4d3e08571fe897697937641f17c2"],["archives/page/3/index.html","0840ea58dee9cede411276e5c0e5646d"],["archives/page/4/index.html","2fcc4d3e08571fe897697937641f17c2"],["categories/Java/index.html","d6ae49082d4d36528407fba7ce95f3a9"],["categories/Java/page/2/index.html","3851f91b66054476eff20fb8095e1298"],["categories/Java/框架/index.html","aca392d45699849564a703c05bb88d9f"],["categories/Linux/index.html","f902b141b5db3e9ef557a2a26055ee85"],["categories/Machine-Learning/index.html","e34476eff1c7f9bd7d5788d3d14564c6"],["categories/Machine-Learning/sklearn/index.html","7ede668109478dd6f26faea970e272d4"],["categories/Mongodb/index.html","f150780075bbabe35fa5718793abac9b"],["categories/Nginx/index.html","763fc410cdbf5eea9dc1258fff0c5287"],["categories/Python/index.html","9e30cb8a811c2b332b9d7217e54b25f4"],["categories/Python/爬虫/index.html","17f2b6a211ddd0785e1203e064c5a5bc"],["categories/git/index.html","65c94af74ebcdc6cf0b4eaf095bf27b6"],["categories/index.html","caaad16f518d065535c4d24e2feb9403"],["categories/前端/index.html","825cc6629397a04197d9dbbd8e689790"],["categories/数据结构与算法/index.html","683108f73277c31d99aaaa8c0c8eaf14"],["categories/设计模式/index.html","2d3446b2e625b3ee81148f52abb9f6c7"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","892fdb63b1e3cff1c0212a8f7e164257"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","bce49f803fb8b3fa6097f99799196227"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","6803b361245c39623f1a9e369cd10339"],["page/2/index.html","c3c19feba2e3f1f79bbda2e28063c9d1"],["page/3/index.html","7c768fae341b2f4d3bcd16085acd9588"],["page/4/index.html","714a685438dbd56a622fe42b7fa44763"],["photos/index.html","4bf340e22f482a8348e2c283a8f1a4de"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","d676db5834849792214d64f1914dfaca"],["tags/Beautifulsoup/index.html","ccec5c6812607b2b65f7a05e9f15f4bd"],["tags/Data-Preprocessing/index.html","0c7c3ddb75d4cc0c5bb5a697dbcc4c15"],["tags/DecisionTree/index.html","1b1aed5901fb48bab1e3cde528000eb4"],["tags/Feature-Engineering/index.html","3283c6cdcf382b6511ca96f2c9ec33b8"],["tags/Filter/index.html","76305103fa71c090121249353ccae76b"],["tags/IO流/index.html","561c05528967b47e0b8735e52333d2e2"],["tags/JDBC/index.html","22d4cefa430e4601b56f743855d9ec05"],["tags/JQuery/index.html","5a947cf95b14b47c238ec3c080d9328d"],["tags/Java/index.html","89ffb8a1ed7b1c648e5c6039037ab076"],["tags/JavaScript/index.html","29a786e6ac15603b97d978376aa3b0da"],["tags/JavaWeb/index.html","cc7f030fe86ecdf3a3d206ff8db0ed5d"],["tags/Kaggle/index.html","8cccd4286fb33e045859ab683375ee74"],["tags/Linux/index.html","f48124fd86c04ed15fbe59af80d2cd48"],["tags/MBG/index.html","633776a8925daae24f702e3cf1099161"],["tags/MVC/index.html","2e84e10c39cc8bc6469c7816a767afc0"],["tags/Mapper/index.html","8a316c85ba1e64c6c8b5692028f833ad"],["tags/Mongodb/index.html","79a900955ed57b550b968df36fa9a401"],["tags/MySQL/index.html","0ed9b7c5fd1594e866b612ffe06cef6d"],["tags/Mybatis/index.html","b46339174a76a7c07b3dbb5e0e4d187b"],["tags/Nginx/index.html","523dd98d4997216c2efd905bc8738390"],["tags/Python/index.html","4264e297c9d0ecdabb94a6099e60dc57"],["tags/Request/index.html","6562233f88b2fe8f75fb09fe83050440"],["tags/Servlet/index.html","285f759fee33d2b00c83f46ca3f99a92"],["tags/Spring/index.html","b02876d2bd6eeb72319ae134187a6b58"],["tags/SpringMVC/index.html","5d6dc42be796f256a53fb329f346fe4f"],["tags/Springboot-starter/index.html","de626942f275ab0804b804ded3b6d692"],["tags/VMware/index.html","9976c8296fe3baaaaf5ce6f27bbd0edb"],["tags/conda/index.html","fe770be516bc5c9ffd1e9620d9165d5d"],["tags/git/index.html","f9f4197f003f274362288cc856b9041a"],["tags/hexo/index.html","1cdcb0b84031f6c3418a2a07cd1987be"],["tags/index.html","ec956e7d9623817c3d2afd8f3f397473"],["tags/redis/index.html","20086b289871d6dafd3e0e5787724200"],["tags/sklearn/index.html","7a5543bf7bd2993d38222c731c893e71"],["tags/ssm/index.html","59ccc73cb7ad9949b1a0d93a3bb0a899"],["tags/依赖倒置原则/index.html","c8c0603249b10a883cfbda14765e6388"],["tags/动态代理/index.html","bc595166db3b08ba0b26345462413cf3"],["tags/单一职责原则/index.html","905ae11cf9613293d42aea2b0c71b1ea"],["tags/原型模式/index.html","08d0a895ca2b25bb3e90c80d67cc040c"],["tags/反射/index.html","8c1695dbf6c06215358690831bc9aaaf"],["tags/堆排序/index.html","583bfdef50d67269b03a2aebb53730b4"],["tags/并查集/index.html","fa6d7d75ece565a7616aaef1842b463d"],["tags/正则表达式/index.html","dc7d86ffdbcec63c34b6c5e80246f74c"],["tags/源码/index.html","21b4b9f0d99153648c7f345082cba08a"],["tags/爬虫/index.html","20b35f79449638c3768da6f4acc0995f"],["tags/组合优于继承原则/index.html","e042b75bebffa084e6499d2277a54c46"],["tags/表单验证/index.html","494a9cd64956ded870893369bfcb69c9"],["tags/设计模式/index.html","813fdde7c285889194de4ca7460bc99d"]];
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







