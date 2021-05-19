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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","15d0f13e99005e1120c450027631cd80"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","7afb8ceecc2ef2c5d42e311689266fa3"],["2019/11/18/JDBC基础使用/index.html","aa8d7b4e0523bcbb708a5d78a0256bab"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","3239494c2d70c293ba5a9c156d38156e"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","5283262ad7d0e214832bd7178f72fe12"],["2020/01/22/云端MySQL安装及相关配置/index.html","410927995b4225145fe4ea7c9b5d1231"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","085323af0c7650e04da83d27467d40bf"],["2020/03/18/Python爬虫基础入门/index.html","2d091b65bbfbfeaf50f145090236b8d8"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","9e1d28e045e6b35aaeea890c37969a25"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","90bc828f6e74bd131789de2465064a90"],["2020/05/27/conda常用命令/index.html","b75a7bef43ad7c76cb3b1f524f5472e8"],["2020/08/16/Java初试MVC及三层架构/index.html","6ac009053a6940b3d603a2f662441b14"],["2020/08/20/Git的基本使用/index.html","7e9e8f8c25ac0df978f3b35581ff2c90"],["2020/08/26/Redis基础案例/index.html","8422adc559dc0d5fc061f9c858b4aeff"],["2020/08/27/前端之表单验证/index.html","dc8e3b4b91aa9ed8f96bcda8a1b04dc5"],["2020/08/31/Servlet优化之功能重组成模块/index.html","0f64424e41e43eda3a44afeba11f2da8"],["2020/09/03/Java基础之Filter/index.html","08b58dc67d31ef9febee7cb5d48eca49"],["2020/09/05/Java基础之反射初步理解/index.html","825b58c43edc80a2fb16bd40324e72f9"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","ef56a0f8de9ac685a4527c0d381e20c3"],["2020/09/22/Spring学习笔记(全)/index.html","da607b9f702cbcd4d9a971d57439c1bb"],["2020/10/02/SpringMVC学习笔记记录/index.html","5311b19bd373dce2571bf228788dffca"],["2020/10/14/Java基础之IO流/index.html","67e1203ce1bea1c9eca5ce0316e5aae5"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","d24f7a16e89716875cdcbb0f54640238"],["2020/11/15/Springboot自定义starter/index.html","30d3399d4592ef54457faca814ece99a"],["2020/11/18/ssm框架的整合/index.html","63c49009733440898e09d0acfd543ac4"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","01bc8ba7db8f1cbe5cfdadb0f9ed650e"],["2020/11/27/Servlet执行原理浅谈/index.html","1dad01839a8c0f8f3d84dc074bba120f"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","f5f766ea0709e411b88f9e7f9247b91a"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","16a12a38cc8af2d870110d59f60d4200"],["2021/03/17/初探并查集/index.html","54d40da7df241ab77068a748a46cd208"],["2021/03/18/数组中第K大问题之堆排序/index.html","8eeda9e3eb68c484603607d9b79b93ee"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","abfa1ef0573e206f2a48f2d3b73642fc"],["2021/05/16/设计模式-依赖倒置原则/index.html","91a73ca56fe7fd5718e2a666e39d8f4e"],["2021/05/16/设计模式-单一职责原则/index.html","88e1c080b870b705faaf057228c2cc31"],["2021/05/16/设计模式-组合优于继承原则/index.html","d0374456f600720dfb6328b1e035ef55"],["2021/05/18/设计模式之原型设计模式/index.html","0d3654bae963c5ea42080cfb556f469d"],["404.html","55f2f6b15ef0eb8a1632aa31bbd8d6ad"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","cffb49631323255b5b0fa77d421b622d"],["archives/2019/08/index.html","67f4f587542df379c177fa138d9bae1c"],["archives/2019/10/index.html","943ad7332d0930ef03dcea9b253d656e"],["archives/2019/11/index.html","7885df0e385b1bf3a6709e8867ce061e"],["archives/2019/12/index.html","45480c7d33efa9bcfb85fd6c0922a0c4"],["archives/2019/index.html","201af03945e74758d7f4075b4a838d6b"],["archives/2020/01/index.html","b6946fc2326edb00ce18cf3536a1b739"],["archives/2020/02/index.html","2c01ab0d8a0de249bb5c0e074dcde756"],["archives/2020/03/index.html","4e9db5fab8ec6b49c08d5ef80ae10e8d"],["archives/2020/04/index.html","b5da1d6e2888ac609d6f27ca87c840af"],["archives/2020/05/index.html","395921c0cb28cf18191dc5748d8021e8"],["archives/2020/08/index.html","459ce2f824c3df2366ccc4954e38102d"],["archives/2020/09/index.html","efb06ed0d60c8dad0a7870b6a1b3dfa6"],["archives/2020/10/index.html","04400a563a635eb8d57b25061e3b2119"],["archives/2020/11/index.html","42477a64211ae283ac7aaa3fc09a31bb"],["archives/2020/index.html","d63173dcff9ed1039b411d03bf1540f8"],["archives/2020/page/2/index.html","3b5d0c4508069020506c3ed8860573be"],["archives/2020/page/3/index.html","54790f86c0abb8d52da5bc3705c5236d"],["archives/2021/03/index.html","de7582158e2e7fb435bf0665a0123592"],["archives/2021/05/index.html","aa25271f989d7f05af0318c449f25b8c"],["archives/2021/index.html","2ae9b322b3a6e44a21f819ed93d6f1dd"],["archives/index.html","f0616cbf850f57033229626dfdcc9881"],["archives/page/2/index.html","f0616cbf850f57033229626dfdcc9881"],["archives/page/3/index.html","b6165d973c877d0ec97d6dd7f021e63e"],["archives/page/4/index.html","f0616cbf850f57033229626dfdcc9881"],["categories/Java/index.html","c845d91bb96410e47a516a13ddd7728c"],["categories/Java/page/2/index.html","0c2bd9cd8dae66aa8b9936ae27bb534c"],["categories/Java/框架/index.html","89b88fd8c81f0c58198053e6adc0637a"],["categories/Linux/index.html","5dfe662ef3741575c07535fc772963e0"],["categories/Machine-Learning/index.html","1ff857bb46959b30461483360f62c1ca"],["categories/Machine-Learning/sklearn/index.html","b3a6c7c3c2360d941a0621d6cf8963dc"],["categories/Mongodb/index.html","8443f6589390ff99ae357013d32a1c88"],["categories/Nginx/index.html","8b37a6a0374c2052f890fdfb9f50767d"],["categories/Python/index.html","0b3fd4a38d7237de03059182ac1b6815"],["categories/Python/爬虫/index.html","40b19110ca0097024a4aff8fb2952eb9"],["categories/git/index.html","df7ae0083cb63c94d2b4493ea79dbf1b"],["categories/index.html","bf88e3a1757d594c6c290b935cce777c"],["categories/前端/index.html","399626bbd97ffdae9f09c264b5d11d44"],["categories/数据结构与算法/index.html","70ce8ecc117e553f64ec588502243408"],["categories/设计模式/index.html","877303bf89c1821a8743c122ae3014d8"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","8a0546ec97c00c1a155170a7312a1fb3"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","6a1c0f8e0d5d021bb01a1688fb092013"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","ac8610d45a5a103967bbc3cd2ef9f6d6"],["page/2/index.html","2adaaed561c57299240401352cd24cdd"],["page/3/index.html","a15434c455f8faa63004a98879053b6f"],["page/4/index.html","db5f927da1cfb2bb8c2704d45412723b"],["photos/index.html","7a292be171e72bf2d0c2a4c9b52cab8c"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","7441d79f74ce9e91b8a6f535b7aa2173"],["tags/Beautifulsoup/index.html","68e0e53e53d9cb55c3043c3cf13bdcba"],["tags/Data-Preprocessing/index.html","a30da9290ddbcf26a2214d5bf77201a0"],["tags/DecisionTree/index.html","76e944aeaed4fe2a8a565a10d20cff8d"],["tags/Feature-Engineering/index.html","a8eee445bd746698ad709bc6b4ca01b1"],["tags/Filter/index.html","22ad1037e178aac06e2f2b882e199b0f"],["tags/IO流/index.html","57b4bb2afbab0a9bac509757b2ed6359"],["tags/JDBC/index.html","c71f45e2b9427610037bfac6371b750a"],["tags/JQuery/index.html","ff86ba8638d655cf5d44016379e2b88e"],["tags/Java/index.html","2198d37aa702b3d3b58129f863fc5069"],["tags/JavaScript/index.html","ff9a6f4453e14423fe43eb9ddaf88600"],["tags/JavaWeb/index.html","68442b060ca5224d31c97c392f34dd03"],["tags/Kaggle/index.html","dfda354eb2483141773a52ccffce90b1"],["tags/Linux/index.html","81ecce301f1fdcf71acf8a3576cc9a92"],["tags/MBG/index.html","040a6fb106a02c3bf981ad0521ce08f0"],["tags/MVC/index.html","ce83482cd84afcd638d25c59e5a5056d"],["tags/Mapper/index.html","bf11afcee9ca92a519d796c16c4cf3e3"],["tags/Mongodb/index.html","6f968a5df800d04e07a0ed35ec44968a"],["tags/MySQL/index.html","72d630a83e295c76532deeda3100f5b3"],["tags/Mybatis/index.html","3322e9fab08564e174e95da6ae47553c"],["tags/Nginx/index.html","969ee5ab8d03627070e423bb74e293a4"],["tags/Python/index.html","bf9db711f31abf219d454c89cfa4214f"],["tags/Request/index.html","5b01764fff4f6cb85b2ab3f87086c9f6"],["tags/Servlet/index.html","69b55d463073547d5ca6d9a345534817"],["tags/Spring/index.html","c9fc4c830b827f9f5fae2a61a5d004d0"],["tags/SpringMVC/index.html","40a693f109eed98b4cf76342c19ecbd1"],["tags/Springboot-starter/index.html","09adfbe2a1361bc1b71d619dfc4faa2f"],["tags/VMware/index.html","3dd405362a56dcc8061a67dc3ebb5176"],["tags/conda/index.html","f5a2cc140e23ba386e2b17d698ec03ff"],["tags/git/index.html","b4f9dd4ad3380890041a7c5be17ed48e"],["tags/hexo/index.html","5c4b0db4ed3f13e349c3540043b9be93"],["tags/index.html","38e44519d8164ac2d9fdbf9d91afac23"],["tags/redis/index.html","185e94b90205d658b069711ffaa2ac1e"],["tags/sklearn/index.html","85cea9c7207ec6f8c4858a5613a397f7"],["tags/ssm/index.html","14af3890e8d85ddbaf960cc6766c950d"],["tags/依赖倒置原则/index.html","788e633123771d3abbd37839f677a791"],["tags/动态代理/index.html","2da732128d3a4911b866f890c32c3b24"],["tags/单一职责原则/index.html","ed5ebdbe46c7875570602c61ff4102a1"],["tags/原型模式/index.html","b454ee9bbf03d83f7790b41d89f831be"],["tags/反射/index.html","a1221ecffc7c9c2f4fd89cb02a26fa0f"],["tags/堆排序/index.html","5a92d868e67bec0038bb325a38f17a39"],["tags/并查集/index.html","6a883495753d95c62220003905453133"],["tags/正则表达式/index.html","dc4b99ebba1adab8ab14c3da2f3c6dcb"],["tags/源码/index.html","a6055b1b25d44a986f725e927a1113b2"],["tags/爬虫/index.html","e60ca2a158988079d5de450e2ef856ef"],["tags/组合优于继承原则/index.html","8934d3d47612145fe9267c812c73d98e"],["tags/表单验证/index.html","9b87f7c6cbf9b2c039b717b90adf7da0"],["tags/设计模式/index.html","10e9cfa7a26ab5def33edd968996154e"]];
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







