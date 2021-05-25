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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","927eb8a4be25d67e8e85cc038a843667"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","3236a78553e006b923e576bc44f4dcec"],["2019/11/18/JDBC基础使用/index.html","852b8efe6ed8e26df62db08aa6e7a1d9"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","35912b7903dd325de41ea58bd0dccc87"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","2ebb0febacb7751a22ee505c8e8714b4"],["2020/01/22/云端MySQL安装及相关配置/index.html","c285affcd748a74bff8d5de42981a535"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","1956e7045df32d7b7fef1999fb2c2c8e"],["2020/03/18/Python爬虫基础入门/index.html","fc50ab700884c365902d759b865bfcb5"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","133c299dacbda7295ab6ea13a41f5893"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","28314cfb8235b9e59512e80405b77077"],["2020/05/27/conda常用命令/index.html","cb24a543bc774d16d156937eda851f5c"],["2020/08/16/Java初试MVC及三层架构/index.html","bae3e4af169ce6d804225180eac1878d"],["2020/08/20/Git的基本使用/index.html","9821305a9258a7c912f54c6c6ad3cbd0"],["2020/08/26/Redis基础案例/index.html","6aac2213fd55cd5a4f2ebff687bbcb76"],["2020/08/27/前端之表单验证/index.html","aa4f08ee3894a6ffab56f0cfd60b6d05"],["2020/08/31/Servlet优化之功能重组成模块/index.html","b2edf1fad1002a98446f7b77eb258f0e"],["2020/09/03/Java基础之Filter/index.html","f9a9e7522784993a4c22e3018f0339be"],["2020/09/05/Java基础之反射初步理解/index.html","a9ab35533ee4add0a801cb07ca702d45"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","c621d8c45d4afec4a03a7dac010d8506"],["2020/09/22/Spring学习笔记(全)/index.html","8f9e61468c8217b0ba31699eac57c084"],["2020/10/02/SpringMVC学习笔记记录/index.html","df602737f22687d72380b3288aca4adf"],["2020/10/14/Java基础之IO流/index.html","63baf4a81c01aa389af7595728ef1960"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","cec2ba81363632ccca4aa24a0ce3ca7a"],["2020/11/15/Springboot自定义starter/index.html","29e5f404340be4e067503fa3e36021b5"],["2020/11/18/ssm框架的整合/index.html","6d73f95eae6733c2c8bc88c3e6a8f5d3"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","015fe429d2e3b301b6667fc383fc50b0"],["2020/11/27/Servlet执行原理浅谈/index.html","1845b1601367e5292a291991db7e320d"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","8d2b9c69024f079930977e7d7ed9b495"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","d18798297d5e185c90977c7abf5834c2"],["2021/03/17/初探并查集/index.html","b17453be7de65271bea26bfee84ab149"],["2021/03/18/数组中第K大问题之堆排序/index.html","b8d7bf624d723f51b3927825ee1f7ed9"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","c9848f83caf6a21212361ba37b7a5394"],["2021/05/16/设计模式-依赖倒置原则/index.html","a39b47cdf618dd53b145d63a32194ab1"],["2021/05/16/设计模式-单一职责原则/index.html","c97c0b11646f8f983cfdc552dfa410af"],["2021/05/16/设计模式-组合优于继承原则/index.html","0721eeb7ad5ef49da072afabc985ec77"],["2021/05/18/设计模式之原型设计模式/index.html","91f41a19a351a7051cbd2fa4039cd1ba"],["2021/05/25/设计模式-接口隔离原则/index.html","5b21289f4d899520fd4a7792e285d1c4"],["404.html","3b4f8ad841d356539336a3d355c4d068"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","a05366b76425c1fe0246541d519fbb86"],["archives/2019/08/index.html","c55a0056f132f4dc88b30669caea6948"],["archives/2019/10/index.html","381a7191338e11700fd695891c87acd4"],["archives/2019/11/index.html","1fd9bdd2c0263d33706a527cc4f69ed0"],["archives/2019/12/index.html","d12afc7dabf28538c7bb9d8bd6336ee9"],["archives/2019/index.html","286a7910ceda010535407e1c28649bec"],["archives/2020/01/index.html","e50006438ba73f5f7d60aba1f6bbc330"],["archives/2020/02/index.html","c8410bb9619418c8cd891f545b632ba3"],["archives/2020/03/index.html","1dadc522b8bf73fcc11182280543ea8a"],["archives/2020/04/index.html","ea83c9965e19612bc8b4fa39e44dd93f"],["archives/2020/05/index.html","5cae109812acb0aefe9ab65dc3b2ece2"],["archives/2020/08/index.html","4bc9718cdaa68d86d46ac048c6b75d95"],["archives/2020/09/index.html","a16f54988b684bf4c2cd4ebc527c7400"],["archives/2020/10/index.html","0b4827df089fe6979acd4a130a28a6a7"],["archives/2020/11/index.html","afd93d71bb9366e3a2fca39f88d7d070"],["archives/2020/index.html","28242b37ce90bdb61b032a953b6201f5"],["archives/2020/page/2/index.html","e2e0e1cabab6f3a7a3f42519cdbfe6cf"],["archives/2020/page/3/index.html","1bc2c928a3c2e9357cfde05039e492fb"],["archives/2021/03/index.html","e19a2012caf500b49c19c1238c972629"],["archives/2021/05/index.html","56acd236192e9a9f19faff5f3b880ff0"],["archives/2021/index.html","6da1f70cc6c82ffb1852095a8d60c5c0"],["archives/index.html","6290bda29bdd56517296831214272423"],["archives/page/2/index.html","6290bda29bdd56517296831214272423"],["archives/page/3/index.html","4c7ee96ea92c14adb34a7d8f6979e7b7"],["archives/page/4/index.html","6290bda29bdd56517296831214272423"],["categories/Java/index.html","bd81c546cbf74f6920bbda6354e4406f"],["categories/Java/page/2/index.html","5a984feb4f0a5774910407620df890de"],["categories/Java/框架/index.html","14111fe394f89ac0d39186298beb26e1"],["categories/Linux/index.html","cc3a36e13619881fe0a59d8d32669d67"],["categories/Machine-Learning/index.html","61743ccc887fac6c19e6f030c9ca0918"],["categories/Machine-Learning/sklearn/index.html","00b4a846d5529c7c61df4f34a270f5ca"],["categories/Mongodb/index.html","060f56310e07da3bce5ed4503e1134b5"],["categories/Nginx/index.html","dd8a9d23f5ca236490642d7683ec72be"],["categories/Python/index.html","3f831896a98024fa0d05cb43b788c4d4"],["categories/Python/爬虫/index.html","bdd613f2e8491be9f7ccf501402b3138"],["categories/git/index.html","1df1c6345f196443a3ffeced54c70118"],["categories/index.html","a758abafe6a8a5618c611ff1b6c0d2e5"],["categories/前端/index.html","6d5d94c77a7a4b28016239b5395d0dbb"],["categories/数据结构与算法/index.html","f78d3806437a63d780a4b5f9ed811616"],["categories/设计模式/index.html","09c147917615e9da55cb2fe875889fc1"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","28ff28e1e9b71f76f3171ea481e765d6"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","d1c09a9defb9b54cd37d8ded1e04baca"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","50521a163130090e10ed6482d6509ff2"],["page/2/index.html","cb1f0c05786b7b092002e64ac305880a"],["page/3/index.html","f9c579764a35570c5c67ad4d48ccfd1c"],["page/4/index.html","d39a1ef2fb1fdd7efd8c23531526b807"],["photos/index.html","c04ceaf7953c4c79ad09e3a9b169ea94"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","db5cabd797151a203dfdcd183e52717c"],["tags/Beautifulsoup/index.html","f7892164cbae8f73340780469c3a6ce7"],["tags/Data-Preprocessing/index.html","e177aa0480241d1a6de31d3a421124f2"],["tags/DecisionTree/index.html","27c2e6a14769288cde40ec1b99ea4b41"],["tags/Feature-Engineering/index.html","d5bdbe49f50685f482e4ca4a8e269566"],["tags/Filter/index.html","921ffaf4864d5b832b1372574f4a0d0a"],["tags/IO流/index.html","55a4472d3c0107257944875bfb40e4ae"],["tags/JDBC/index.html","1ed1d3d9d8325f6e698d289dd7fd1c15"],["tags/JQuery/index.html","121246cb6657600c7bbea63387d5a879"],["tags/Java/index.html","29aebb076f13d2ded4614594ec31a445"],["tags/JavaScript/index.html","3af47bf82832e60e4c3b60b5aa340f63"],["tags/JavaWeb/index.html","561ec88f867e632daeedd9911564a151"],["tags/Kaggle/index.html","fdfb831e5cb0d8195906e752c739f2e1"],["tags/Linux/index.html","845bfa86c9625e8fab1920a131870a4e"],["tags/MBG/index.html","147bb63ce2a1ce7b193562e5ec9b54e6"],["tags/MVC/index.html","42795da862ed5fb867eb09111a9a5309"],["tags/Mapper/index.html","815591d2f4ba01e2c9c5cc7be80c8b14"],["tags/Mongodb/index.html","fbae0e31c8fa24b20026ccdbc41d0b32"],["tags/MySQL/index.html","e19e3a0be085c3efbc6e4555fa42779e"],["tags/Mybatis/index.html","0dc4820b839aef1da35d2ef3bfaeceac"],["tags/Nginx/index.html","a011994d13c83fe3bc5f12021641e7de"],["tags/Python/index.html","9d2224da07813688baee28f92488b8f7"],["tags/Request/index.html","487e96320f092f11ef4f5f51475ddfc1"],["tags/Spring/index.html","1a0eb7b005b2239f5a002a9c2d7438d2"],["tags/SpringMVC/index.html","4659bf9b995c0d140d95517a193939c6"],["tags/Springboot-starter/index.html","c670c69f355d14550e9cb1fecc281e10"],["tags/VMware/index.html","f4da829c2fadd6d571caf5d6c2f2f08b"],["tags/conda/index.html","7f7d4777aee6b7474a0f14f204bfb8f4"],["tags/git/index.html","844889580f2c4540ce8ceac4b89131b7"],["tags/hexo/index.html","2de4600ba0d24a2cf458fd53f6261c49"],["tags/index.html","35def5432968789be60484c5e1975758"],["tags/redis/index.html","469ca7d1559ba952d569d41d995fce8d"],["tags/servlet/index.html","671f86c758c1b1a24ac523a380640a6c"],["tags/sklearn/index.html","ae920c494257c2a1c56a147c2114cead"],["tags/ssm/index.html","c03c24651511f29b782b83f34afecb0a"],["tags/依赖倒置原则/index.html","415a48797aa976e693e2c049fba71556"],["tags/动态代理/index.html","2e6bd4ccf141036dfee27ec35571a121"],["tags/单一职责原则/index.html","5e7a6305a0b9778f94c9acfd53cd24dd"],["tags/原型模式/index.html","f420586f4f7d808ce61ec4dcbca75476"],["tags/反射/index.html","17c149927cf927434c0b0526a8c7563c"],["tags/堆排序/index.html","e8bd8b9277355b1d6b418b84a3a46a36"],["tags/并查集/index.html","d145264b55fc25f2e59f44a0800a7fe3"],["tags/接口隔离原则/index.html","82f807c2e5ade4104b1fe49804e77efe"],["tags/正则表达式/index.html","c26d10521e08c080eb6d4fd46cf6624c"],["tags/源码/index.html","cf6a152aeff6d3e905b5f5235286010b"],["tags/爬虫/index.html","2aa59795c23e3d80d660d84dbb523dbd"],["tags/组合优于继承原则/index.html","17028efa268da56220aa4722cf915a4b"],["tags/表单验证/index.html","deb36ad0f82ec22fb4b5ab9965dd3e1a"],["tags/设计模式/index.html","a8b8b796be3b097c15256fd79b4ab488"]];
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







