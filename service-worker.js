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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","4f7bd49ae5479665c1d8152dd3e06872"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","ee0a0c56ffe9531b3b7551476687910e"],["2019/11/18/JDBC基础使用/index.html","447f411cf59589cee947d70f4643fab4"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","a50b8b15fb3416bd5c46ba66d697bccc"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","3afaee56ba2a1f666a902bd1d81f8c6f"],["2020/01/22/云端MySQL安装及相关配置/index.html","968877403eb7aa7994ec29103d717895"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","645b457bfcbf51c5bfb5b63a91c4e28a"],["2020/03/18/Python爬虫基础入门/index.html","cb01a38fe291bd4b68d613c5f8e0015f"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","74531cbb0343b09040d9a5f6c77b6c12"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","1cf4c5058014c19b8130eebe45146843"],["2020/05/27/conda常用命令/index.html","3346e57ee717fd5b6de18c567a6e116e"],["2020/08/16/Java初试MVC及三层架构/index.html","4c41e6cd5ee03b743bf0da607367c7f7"],["2020/08/20/Git的基本使用/index.html","22d608b662894b510550951072415a33"],["2020/08/26/Redis基础案例/index.html","a060d422d168ccb6b04b94e3fd0f8882"],["2020/08/27/前端之表单验证/index.html","4d665dfa238ed0dd544dae3ac6d9e1d9"],["2020/08/31/Servlet优化之功能重组成模块/index.html","2d0fdb550a8f760f4ad3457f954411a6"],["2020/09/03/Java基础之Filter/index.html","b06ec305e887765689018881ef4ef8b8"],["2020/09/05/Java基础之反射初步理解/index.html","733169a2455f5c8a966cf92c9ce1bf42"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","53d5a45daf6d9349c7d0af4391d9c352"],["2020/09/22/Spring学习笔记(全)/index.html","51e531b690c3773e9baf0c02e123e39f"],["2020/10/02/SpringMVC学习笔记记录/index.html","0cf4a060a2ceaf8d12e752bd706c0b2e"],["2020/10/14/Java基础之IO流/index.html","93f70ef71db055c3a025824c6cb2c6f3"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","aad8358966b8d9b0d06fee3e37e42268"],["2020/11/15/Springboot自定义starter/index.html","4937b8588b8df4ab294d807da81ffde1"],["2020/11/18/ssm框架的整合/index.html","57b98cffacb24ac43b3ed39d6aa1f903"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","ad9cd086ddad0dc9a2507684eb1f585c"],["2020/11/27/Servlet执行原理浅谈/index.html","01cb541e69d268a419dc57ac5d5527de"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","dce2de401e0a7f284604a28bdb2f3599"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","9c2d7442a4d31a4346f8bab131f30fcd"],["2021/03/17/初探并查集/index.html","d7d15d0cd07e60d7b002af210265d3fd"],["2021/03/18/数组中第K大问题之堆排序/index.html","6d22e08dded92dd59bed610125a80b00"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","6229f5bdad4ec6186dcfd45ad077f283"],["2021/05/16/设计模式-依赖倒置原则/index.html","d6e9986009e98e43a2e4e2c8f9c8f3a8"],["2021/05/16/设计模式-单一职责原则/index.html","621c3fa18c464911257595944858e967"],["2021/05/16/设计模式-组合优于继承原则/index.html","0d01345d3aecd083827b773fc1b089e6"],["2021/05/18/设计模式之原型设计模式/index.html","b1b7691895cb05791452dd4b72c99586"],["2021/05/25/设计模式-接口隔离原则/index.html","57755a7fa8d61cf4d2d999c6d6295b1b"],["2021/05/26/设计模式之单例模式/index.html","1ebf8d2a3d9686f907f669c48c39c540"],["2021/05/26/设计模式之工厂模式/index.html","918d0d37c89719188eb598aa0b523666"],["2021/07/10/设计模式之开闭原则/index.html","dfc3223d1addef070cbae233c7611293"],["2021/07/10/设计模式之适配器模式/index.html","e4bf1cdcd32c8aa61a4ec7c8c7b8de1f"],["2021/08/22/谈一谈对ThreadLocal的理解/index.html","72f9d604adec50c3c13458ea59e16661"],["2021/08/30/设计模式之建造者模式/index.html","a8d6c4fca9165d19c9fa51c04f775ed1"],["2022/03/17/数据结构之前缀树/index.html","4ff7d36cc9f2973c8af1152b05b99644"],["404.html","3b4f8ad841d356539336a3d355c4d068"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","a05366b76425c1fe0246541d519fbb86"],["archives/2019/08/index.html","680bf69f9a813396aca826625bccc3ea"],["archives/2019/10/index.html","181103aa7a5b8684e339ef7e8e11cde5"],["archives/2019/11/index.html","f86ba165a74c91a2b719d2f3fc3931e3"],["archives/2019/12/index.html","342a9fdf14e65ebf2c4e8719c132f5c5"],["archives/2019/index.html","3e4e877c97fe2f9b2b631f073f22fff8"],["archives/2020/01/index.html","b6843aace982850c82275de10af6dfb1"],["archives/2020/02/index.html","46117049d031dcb7f0ce788fa18adc97"],["archives/2020/03/index.html","0b0cff4cc6e6b48058e46298362b3852"],["archives/2020/04/index.html","095d7f35689a319e169aa9f0da2ec6ee"],["archives/2020/05/index.html","0e2bf57dac8a94bede932f5481ad7b66"],["archives/2020/08/index.html","fc0aea0e6d550729910d3f86f21de7c3"],["archives/2020/09/index.html","faf3e1296fa0fba8849b405336ae61da"],["archives/2020/10/index.html","66edfcb3e0302b5376555c70318d2bf1"],["archives/2020/11/index.html","b2da2920917a4f94c43fb0ed8e9bcadf"],["archives/2020/index.html","3a19f58f1eef846a1f1defa750849a0e"],["archives/2020/page/2/index.html","7254f41394aabb31d22204366e170c2b"],["archives/2020/page/3/index.html","4f4adf7d1dd9874271538bd4c4b2e0ce"],["archives/2021/03/index.html","aeb2c3ba02d590868cb12e76aedfc626"],["archives/2021/05/index.html","2ae9a5ed86e92cf5ceca1245c3f538d8"],["archives/2021/07/index.html","76011dc7f7b05db28ebf4af63c93a5dc"],["archives/2021/08/index.html","451ac71063b6eb27668d69122f8d89fe"],["archives/2021/index.html","d944b572dd35fbfcf33566dcd46054f6"],["archives/2021/page/2/index.html","bbad63ecc796bffa3355f8e6a02e79cd"],["archives/2022/03/index.html","0dbc67a9977c5383177b638f947bfb30"],["archives/2022/index.html","28f1aec07e7714373b2247fdbcdcb512"],["archives/index.html","b1a36188ad7028cae0fe1f80057823c1"],["archives/page/2/index.html","b1a36188ad7028cae0fe1f80057823c1"],["archives/page/3/index.html","b1a36188ad7028cae0fe1f80057823c1"],["archives/page/4/index.html","c1be0f5f164b1f6b49a3f1752811deeb"],["archives/page/5/index.html","b1a36188ad7028cae0fe1f80057823c1"],["categories/Java/index.html","bce8f319503cbf46ac13690b862ed4f4"],["categories/Java/page/2/index.html","a2bfaf9ff16bbb3472c2bb52d7d41311"],["categories/Java/框架/index.html","73e482abbce9853f11a696c5940b2480"],["categories/Linux/index.html","7c65ac727e05784f5df9bee315347eed"],["categories/Machine-Learning/index.html","a3f9a30da28ca48bf4bf7b637c8449f1"],["categories/Machine-Learning/sklearn/index.html","fc6c1bf2c69b4eaac16cc8e9b5d114f8"],["categories/Mongodb/index.html","6e022bcae72bcebeb2208f7c8974f823"],["categories/Nginx/index.html","5e90dfa75a770d72b49912a4290792f3"],["categories/Python/index.html","1504c5c4a29ebfabc328bfc34124ed9d"],["categories/Python/爬虫/index.html","e85458af22d0ffd0cfbac4b38ea36928"],["categories/git/index.html","a7f0fb90fec828802bf49caa0ec0b9f4"],["categories/index.html","ec63038a0609449534c4809ec5385530"],["categories/前端/index.html","5f3e3efb7c50b6127488e7484a8c0a35"],["categories/多线程/index.html","b81443e9bb41e759c9d56ff29d9b6a43"],["categories/数据结构与算法/index.html","61b0b6cbd003d8d17d49c6d547eaeca3"],["categories/设计模式/index.html","a02209774bb82d5436f2ec5a4f9ad190"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","487119f47bd27eae835f8b8d16877fb6"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","9b82076170669c4ec12cdfad21cd150e"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","0995be9dbf847a4492564990516f6926"],["page/2/index.html","7c6083323ad322ccc58b9469dcc1af3d"],["page/3/index.html","23900de1e2dde72734f1cb8b34f53356"],["page/4/index.html","4c377a36d9526e32a59d493ffcaaa8e2"],["page/5/index.html","676f2a61310db224f7a43921b36db535"],["photos/index.html","57ef72b32c1c84c9e0b0a6b6b04155be"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","533bc36dc67d5a5e6ce347811f3b82e6"],["tags/Beautifulsoup/index.html","a443822b55709228304cee3eeaf8d992"],["tags/Data-Preprocessing/index.html","85712de70d6603eb31ddae2aa1f6cefa"],["tags/DecisionTree/index.html","3f8e3e36448fc5d6536b8dfd5312dfd7"],["tags/Feature-Engineering/index.html","604691fa5cf5942b61f7c9980e388d3c"],["tags/Filter/index.html","7e35e36cc106318d0879bf74f32f56d7"],["tags/IO流/index.html","01a1e8f43742b33096b58d32e9d58476"],["tags/JDBC/index.html","b619454d1e89ddb4957a5451fcc1be18"],["tags/JQuery/index.html","8c16e3b1890e232aa8c346ab43dd2bf6"],["tags/Java/index.html","bf0ea7c43a3c624fb5c2dcede5be7d0c"],["tags/JavaScript/index.html","966d7e28e7e9d6841f6e51d732a27801"],["tags/JavaWeb/index.html","ead60e51c6449272422e3360de5f384b"],["tags/Kaggle/index.html","5edaccff1b9f7a49ec18fa816f22b869"],["tags/Linux/index.html","47e63ff58c0b70ded463175b9d7262e2"],["tags/MBG/index.html","a6ca756a86f7bb2c0975cbb79223efc1"],["tags/MVC/index.html","a38851a1ffd87c6faddf83144872046e"],["tags/Mapper/index.html","6ea2ba5302970610706bd95e0799f75e"],["tags/Mongodb/index.html","36e199cd579afd64c4f2df5155b4b7c7"],["tags/MySQL/index.html","234fbb5354139f1f269e938d8b2084a7"],["tags/Mybatis/index.html","dcc13fbfd66572189404e51506279279"],["tags/Nginx/index.html","57a57eb79fa672f93170601ba8cbd140"],["tags/Python/index.html","5f394fa2a3bf0e91cfb53af796ea26e9"],["tags/Request/index.html","3ebb320a7388f04e457bdd1d0f6e3d20"],["tags/Servlet/index.html","9b3d5d673ea6772e461a7d19c95e9431"],["tags/Spring/index.html","9c1417d8a4093c9393b9efd3effb75ac"],["tags/SpringMVC/index.html","af62b337882d381e82f2ca4121810f89"],["tags/Springboot-starter/index.html","2a146910338ff41a6f8e4379e84e61df"],["tags/ThreadLocal/index.html","926611fe4352b49725a3d2280ed0781b"],["tags/VMware/index.html","11075b2e64e28cf2bb1aac68777f0f4b"],["tags/conda/index.html","96b15b02f4d711ebbcbad22c4115546f"],["tags/git/index.html","d576612f971cea9fd3bb1072b782929e"],["tags/hexo/index.html","42c95041bc4bb86b98d08f41f5c1268e"],["tags/index.html","8005a4e6a3ddb8bf023c6254bc47b5a8"],["tags/redis/index.html","d21f81b36da25c82450a0dce9730f389"],["tags/sklearn/index.html","2bafa55eafc5bc641eef006ac9f3be18"],["tags/ssm/index.html","38bda94ce16f5033ba660b33e670da80"],["tags/依赖倒置原则/index.html","0aefa0cd0e91eee96e522ec1e6311b98"],["tags/前缀树/index.html","da1bfc9ff107e90838d6fc3788f044ed"],["tags/动态代理/index.html","5eb7b9f3477d08fafda88cddc59e20a0"],["tags/单一职责原则/index.html","756f0bb6c4d034603028397f752730df"],["tags/单例模式/index.html","c7794c98e78c745df24a9d59318e7dbd"],["tags/原型模式/index.html","599f8fdb5227de6fb849cb9b7909fb1b"],["tags/反射/index.html","e34cc89f8b928688635b15a2ab45678d"],["tags/堆排序/index.html","a34d058ce9dec0e87d0cdfdb9cf99b6f"],["tags/多线程/index.html","15757727d8710bd5d57d56bcd8b0b04e"],["tags/工厂模式/index.html","dcbbef70d8b0c91306d8207b92601649"],["tags/并查集/index.html","85fdb232fcceffc0c89c527e6142c35b"],["tags/建造者模式/index.html","4ff40722a8dff4132d2e94eeb90e66ab"],["tags/开闭原则/index.html","8c4bfc708827297fabc596983db198c7"],["tags/接口隔离原则/index.html","085a98b57632db4108f5b659259107de"],["tags/正则表达式/index.html","79be2f56361419d8284e7f8e89e28028"],["tags/源码/index.html","406b080fef819906da0141585bd154ba"],["tags/爬虫/index.html","7787217ba2df1699ec02246d43ee5873"],["tags/组合优于继承原则/index.html","54966b2be82217e712872fcb4054b1c2"],["tags/表单验证/index.html","8b03f731f83f0d7d6b23d95b79094ff4"],["tags/设计模式/index.html","ab5851fd7ba391d79d4fd2c2ce6f24ae"],["tags/适配器模式/index.html","31b30e2a4006ed810a88a5d260699e08"]];
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







