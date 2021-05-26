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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","16d00607cfaad26498c4a98e0f9b110d"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","8c922d21dc7923e1cd3559ad0e2db193"],["2019/11/18/JDBC基础使用/index.html","1e7799ba5f1551f406bea1e28363016f"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","0d720333c25a82307e65c6d48ce18e41"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","b8d16a115c673b503b4cfa4c4bdaa95b"],["2020/01/22/云端MySQL安装及相关配置/index.html","ff1cef34831007f56af315215d3fb081"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","7d0f097f146bc233b1369319bdb6e8b4"],["2020/03/18/Python爬虫基础入门/index.html","eac0813e0f8a3b14bf7641430e319919"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","1bf341d9e2d77c3f24fb891f3edea176"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","e22fc0d555dd596aa9d44fe221120432"],["2020/05/27/conda常用命令/index.html","bb058465ce17007836e06a43b3f8d56d"],["2020/08/16/Java初试MVC及三层架构/index.html","f8987707c4d05fd11c85550dfe8b62eb"],["2020/08/20/Git的基本使用/index.html","c80fcabad577217588dd70f1cdded1e5"],["2020/08/26/Redis基础案例/index.html","fcf94959b5d1692b3ce46da99dc1874c"],["2020/08/27/前端之表单验证/index.html","934b0b144c78922abb732730c72437db"],["2020/08/31/Servlet优化之功能重组成模块/index.html","3c1f8f3860370b4b5df086aae55b7a46"],["2020/09/03/Java基础之Filter/index.html","e95c40cf348319abfba165f8bac2eb3d"],["2020/09/05/Java基础之反射初步理解/index.html","7fe122c39c0026c4859de0ce87377ded"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","73eb132412a8ea4c58111c93ed60dd3c"],["2020/09/22/Spring学习笔记(全)/index.html","cc3401d99f07937765612c784a75fd18"],["2020/10/02/SpringMVC学习笔记记录/index.html","535d7feb3fde450b812f40fad81bd78f"],["2020/10/14/Java基础之IO流/index.html","3fbaf1f8fc46163d1d7da4a5287c6f46"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","e62b2ef2fa875c0a1c67f04257a7284c"],["2020/11/15/Springboot自定义starter/index.html","31b9a9727043e89a1d6f0d7ebce9d410"],["2020/11/18/ssm框架的整合/index.html","0cc43de6535f6d2715bf6959fa8bba8e"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","d82e1df8c7f6124d112fc1a5873d4564"],["2020/11/27/Servlet执行原理浅谈/index.html","91c9f725be497c2b2afc9cd4070079e9"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","c872d20d4f5030b893efb78960d8cfc8"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","c06d7120fc34433014e317f2ecc7e656"],["2021/03/17/初探并查集/index.html","349fdd8932d45e5f77d17d44a9837f94"],["2021/03/18/数组中第K大问题之堆排序/index.html","f56270ee0bcaa0e631f5422d08c01bd7"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","fc4698892371cfab9939ded7946efded"],["2021/05/16/设计模式-依赖倒置原则/index.html","f75bdba8757f667bc1795a1d0e5adc7b"],["2021/05/16/设计模式-单一职责原则/index.html","b2600ef2500775c8b3c96595875d0ba8"],["2021/05/16/设计模式-组合优于继承原则/index.html","5e2c9df0907ffc6917d7bc09792a6d09"],["2021/05/18/设计模式之原型设计模式/index.html","d8212be1b4a073ad41e0a5d5a11108a6"],["2021/05/25/设计模式-接口隔离原则/index.html","e30657202bed8d009d48e6ea93033994"],["2021/05/26/设计模式之单例模式/index.html","ba28ef525a79318e3e7e250f29dddeb2"],["404.html","3b4f8ad841d356539336a3d355c4d068"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","a05366b76425c1fe0246541d519fbb86"],["archives/2019/08/index.html","ee8b0ffa32dfdeac7ef1dbdc87ef7af0"],["archives/2019/10/index.html","ace4fae7122d0edfc7a81afa5e41e92c"],["archives/2019/11/index.html","a61ea8b592376845bda249f3d55f227d"],["archives/2019/12/index.html","3f9df66304e21ce99124ea637b21d78d"],["archives/2019/index.html","a60e11979c6a97828023fcec107841d3"],["archives/2020/01/index.html","36ed68e0e94833d381c0d99c4a31f242"],["archives/2020/02/index.html","77a7cac6afd1d734fa6fa41e60ff8a77"],["archives/2020/03/index.html","23fc796adc97dc902e261c65eba0edbc"],["archives/2020/04/index.html","742fff13638e9b0224f116aafc6e0acc"],["archives/2020/05/index.html","6d774d0cdd57c7958c4cc91e9614a315"],["archives/2020/08/index.html","e43fd9f9aa8078cc1b8f260d04908dbe"],["archives/2020/09/index.html","74f3a62261e88f2abe4336db905c5d84"],["archives/2020/10/index.html","f51581579493485c83de98879ea8e398"],["archives/2020/11/index.html","d92d5e0edb6b1292450139c1120949c0"],["archives/2020/index.html","2b91d7e16d3245cbf6649c90580b5b05"],["archives/2020/page/2/index.html","a0d08b79ae501dee63702a965f499a6e"],["archives/2020/page/3/index.html","779be1ad5739f26d7db76bc8be1bede7"],["archives/2021/03/index.html","f8b474235d922d64af43dabe94dfebce"],["archives/2021/05/index.html","328c35d9d51488acbc576b0b761d9985"],["archives/2021/index.html","9347587b1c5b7473b79e400da1727b49"],["archives/index.html","21a072ee45610d59416912b0b76fb160"],["archives/page/2/index.html","21a072ee45610d59416912b0b76fb160"],["archives/page/3/index.html","1cd0f3ebcecbe1e0fd04bd5710c79b8e"],["archives/page/4/index.html","21a072ee45610d59416912b0b76fb160"],["categories/Java/index.html","e7fda2af3d9854b7ab4b042dd2646e3f"],["categories/Java/page/2/index.html","b256a0d79627ccdc6a074824f2bc3dd7"],["categories/Java/框架/index.html","8f3cf079028a7c2372832d7c16ee189f"],["categories/Linux/index.html","3859ce7fdc9cdc4b17c8023ccb7706db"],["categories/Machine-Learning/index.html","216c3ed6040e196899bc0fa73586af59"],["categories/Machine-Learning/sklearn/index.html","e304fa82d93190b0b9f24b6f3caa796b"],["categories/Mongodb/index.html","b04d4628ddff80f20d1815f3b989cdbe"],["categories/Nginx/index.html","407121f5f799c925d58cfe082afee846"],["categories/Python/index.html","3e2ae9312778b07efe96cc39f018b0f8"],["categories/Python/爬虫/index.html","8f2c1168bd8f7ccc0ce682b69df08659"],["categories/git/index.html","a099a43caf9ffde60a140a4f1fcc9398"],["categories/index.html","1274ac8e97a8d2bf8f4aaa0b9bc65a0e"],["categories/前端/index.html","cb05004937128b6a6fa2c5de72108981"],["categories/数据结构与算法/index.html","e8dd701b6002f30fa324c96d3803e493"],["categories/设计模式/index.html","957822374692f8f9d8b687bcd6924b78"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","fa80191d5aa75887270b6f092d605300"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","7523afd279748b3380d389e703df2b00"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","8b6980360c8f047768bccbc3cf67b3fc"],["page/2/index.html","9d245512f475731cb354e9914ba5b1f9"],["page/3/index.html","56b3e73291c7b67d3913f5e689f34e23"],["page/4/index.html","a284f16adcfc9775512a8d29f151ac43"],["photos/index.html","664a487ff32f6fbdb6d085713b2e2b32"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","245d4c8d3c305cae77ddd90743975318"],["tags/Beautifulsoup/index.html","e2520ba6ee0fae525a2836de00a1aa78"],["tags/Data-Preprocessing/index.html","a77512d8050735ccf2d12f78e24ee7f6"],["tags/DecisionTree/index.html","6bd32fd8bdfd2ad39fb209cb27804de3"],["tags/Feature-Engineering/index.html","58526c5de28354bc7eb63c4ff644e48e"],["tags/Filter/index.html","8a1e758339c800c60ac0ccd1bcf122c5"],["tags/IO流/index.html","c7d49245ce744b7aa29f1b1faed8ae2c"],["tags/JDBC/index.html","644d53bf1f501d4cd802545fe07fc9c4"],["tags/JQuery/index.html","da8f4ea4f638f8a2020e443840000824"],["tags/Java/index.html","6e1af216a6dd174fd3111e16cbcb5b36"],["tags/JavaScript/index.html","6b687c92ad2e83388a3e835872deba10"],["tags/JavaWeb/index.html","d420f86389559ba78e671d1791a4adfc"],["tags/Kaggle/index.html","f4ccdf0d3efe6e31de53cc90ddd23a6f"],["tags/Linux/index.html","cdc386a2388b7efe46c9331c19fc6617"],["tags/MBG/index.html","62924540e4491181e44e858964eeae4f"],["tags/MVC/index.html","f6029272d735ff9fbf9979715852c057"],["tags/Mapper/index.html","5cbeddd265c87fa83adcc7fbfd465cdb"],["tags/Mongodb/index.html","e84b6271a3c5332d7e92772902ec0dae"],["tags/MySQL/index.html","53d5c359bf66793f7e73d5d20a452a7f"],["tags/Mybatis/index.html","8790b4e2c457481fd6e2da467a250681"],["tags/Nginx/index.html","0e687657fc119bb3681b96fe65039a3d"],["tags/Python/index.html","1c0e3ae14bb3bd1358452546eefdb014"],["tags/Request/index.html","7673084b13a624763e52a12f67f5cca0"],["tags/Servlet/index.html","162faee7b92e1c622996a2aaee0a5084"],["tags/Spring/index.html","f8d8aea837204d19fca1a4aba5c52a91"],["tags/SpringMVC/index.html","e3d5b783d96ecefdbb4b8d57c1c178e8"],["tags/Springboot-starter/index.html","4ef0dd2ccc2d460dd6f85afd863c97bc"],["tags/VMware/index.html","c24064c6cf67bcd2279f61c636f7fb90"],["tags/conda/index.html","a5e9b9c4a103b7412285df7ff3d67c58"],["tags/git/index.html","2608ca2a6771ae82ab640ca7980e4507"],["tags/hexo/index.html","ad65778d016f0b62758f9b9e96b9b6ca"],["tags/index.html","af7feeda305cbe2c7ce84a9410b488cf"],["tags/redis/index.html","838291c5fc2aca1335fcb5b3eef41eee"],["tags/sklearn/index.html","aebbf0584b5e6ee3c4b22d5dd9342931"],["tags/ssm/index.html","9e49ff15a35e983acbc18367f354e694"],["tags/依赖倒置原则/index.html","20b28441f4de105411becea114e36a84"],["tags/动态代理/index.html","28250b127123b1967a50e476cb07b392"],["tags/单一职责原则/index.html","83e6639f18600ca9adc513f8cf6d8317"],["tags/单例模式/index.html","c45c73b399496ebc235bac98b6946caa"],["tags/原型模式/index.html","9c277a6cb70027b30f358527e7ccec5a"],["tags/反射/index.html","d23990a5b88b29686b3ce52f3f3480f9"],["tags/堆排序/index.html","49a5cf1722d7184127cffcbea29b3cb5"],["tags/并查集/index.html","06909ae1dc303ac4a739eb759709226d"],["tags/接口隔离原则/index.html","9b13de1e9aed2b2e612ca558fb6a8cd4"],["tags/正则表达式/index.html","3b98cafbf82a25ecd099804daaf7e16b"],["tags/源码/index.html","aba2d6b8272a84c8024c4b303af490a1"],["tags/爬虫/index.html","8e1562a9af67576c6e2a7011797ffbf7"],["tags/组合优于继承原则/index.html","49ecc1eb515dddc823b902e0572dc9e3"],["tags/表单验证/index.html","7a66bacea06a72b78198a304bf0a20b7"],["tags/设计模式/index.html","21778e9f8f0bcdd038b762020fcb9053"]];
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







