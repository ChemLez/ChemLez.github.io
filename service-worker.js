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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","40061e0122ae1da673f4ab132f915eeb"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","e3bddfa5ed50685664a5bdd1d0f65688"],["2019/11/18/JDBC基础使用/index.html","81426a005402e693fa7592398352926f"],["2019/12/21/抽取JDBC工具类——JDBCUtils的使用/index.html","64caa28952cbd289be64b6495a131e01"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","ad3b10cae973e7f461502dbf7a37adc1"],["2020/01/22/云端MySQL安装及相关配置/index.html","10ece2ee8740cbeb07a43cb610c12ff2"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","4141e8661e55ff47037da2419fb209bf"],["2020/03/18/Python爬虫基础入门/index.html","7ee1d1fa5e26cb814df7042150b0734e"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","99aebc7293f347575ad4857e06dc58c3"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","a05d5b4497a232835a202c8b8d042c33"],["2020/05/27/conda常用命令/index.html","bc1b9db4f152dd98bfd67b1feb5452ab"],["2020/08/16/Java初试MVC及三层架构/index.html","d2c39cbefcdb82f70cf20f98a18a0cc5"],["2020/08/20/Git的基本使用/index.html","069ed2cec746635a208bff81413e5949"],["2020/08/26/Redis基础案例/index.html","6a8cd958b5774f88346357a404b6b153"],["2020/08/27/前端之表单验证/index.html","99807199abdd6ade5ac7430679dcf79a"],["2020/08/31/Servlet优化之功能重组成模块/index.html","29395dda49f353e730be9573608f6afc"],["2020/09/03/Java基础之Filter/index.html","923e28a2196759f0d98749421aefdc4e"],["2020/09/05/Java基础之反射初步理解/index.html","03cdef98274ccc929646157723098bc7"],["2020/09/06/Mybatis框架介绍与基本使用笔记/index.html","74b7c4d9ef6544be9582acfd918b125a"],["2020/09/22/Spring学习笔记(全)/index.html","98e5aa6e57bf62383d34527c30110224"],["2020/10/02/SpringMVC学习笔记记录/index.html","5a4fe3b5e486914547869cf7b68ccb81"],["2020/10/14/Java基础之IO流/index.html","b07f4f82214856fd5ce12980b1ede794"],["2020/11/09/Mongodb的安装配置及基本使用/index.html","11b61a84ab063c2b0e1ca7917b6e9d8d"],["2020/11/15/Springboot自定义starter/index.html","ea217ef59faa33a12664aa41af276489"],["2020/11/18/ssm框架的整合/index.html","78d4496c4abe532f5d0d88c3bdebc0a0"],["2020/11/22/简化Mybatis的使用——通用Mapper/index.html","bbe2721474d3731872bb3cba857cbd23"],["2020/11/27/Servlet执行原理浅谈/index.html","7b34c8718ee60b31d2850d99da49bbff"],["2020/11/29/从Servlet到HttpServlet都经历了什么/index.html","6161c24789bb2785f1ac19fc84df005c"],["2021/03/11/Java比较器之Comparator和Comparable/index.html","5e1cd182acd2b437d630ea91bf274d31"],["2021/03/17/初探并查集/index.html","178ffbae66343e54278a1e4c3e662963"],["2021/03/18/数组中第K大问题之堆排序/index.html","f51d5684babdc59370d80cb1eb0ac496"],["2021/05/10/Nginx学习笔记及牛刀小试/index.html","13071a0c6ac267953b0e612ee4d6314f"],["2021/05/16/设计模式-依赖倒置原则/index.html","f35f0c7333513ccd3603f267e0389721"],["2021/05/16/设计模式-单一职责原则/index.html","93bd07acb122f79943eef39d7dd5654e"],["2021/05/16/设计模式-组合优于继承原则/index.html","7cb1fa14b6d0be6e6b0b1244016d89dc"],["2021/05/18/设计模式之原型设计模式/index.html","820d3f09ffcbea871ef580065985719b"],["2021/05/25/设计模式-接口隔离原则/index.html","63df8f38f55e3fc1810fbd20c3cd6753"],["2021/05/26/设计模式之单例模式/index.html","65e689534792a763c844931c97541d6c"],["2021/05/26/设计模式之工厂模式/index.html","199b1ef88cf77a1e2dce912bc9d5b051"],["2021/07/10/设计模式之开闭原则/index.html","a0664c681c1fb8aa2da18232c8f0750d"],["2021/07/10/设计模式之适配器模式/index.html","d88c5c2d315973894727720cb4a73000"],["2021/08/22/谈一谈对ThreadLocal的理解/index.html","7e1db4966b4795bcfb17c494188f7b02"],["2021/08/30/设计模式之建造者模式/index.html","01a39f91281aa4bca576af32e11ceb6c"],["2022/03/17/数据结构之前缀树/index.html","3015b6c558b7e25579ab7acef6d037eb"],["2022/03/19/初学NIO之基本介绍/index.html","24058a2258cacbf77a7ed16c68d9e90b"],["404.html","3b4f8ad841d356539336a3d355c4d068"],["Photo/继承关系.png","7a0f464c11e38fbe8437ed74cb2dc81b"],["Photo/继承图.png","96c3889347455c12cc905505249f0dcb"],["about/index.html","a05366b76425c1fe0246541d519fbb86"],["archives/2019/08/index.html","70baf1bd524860722d8c48d5edefa586"],["archives/2019/10/index.html","37afff7f25a63b646f3cbb820ce01bf5"],["archives/2019/11/index.html","dc0e34275b4d043c5dfc485db4e24386"],["archives/2019/12/index.html","779ba1412ce9046b293bc461c3badf0a"],["archives/2019/index.html","cc2b549968e196bd3d03970c1a673005"],["archives/2020/01/index.html","6adbb97dea1546bf1583861be28eff8a"],["archives/2020/02/index.html","229924b47d9eb45e53bf1bb64fee0f4c"],["archives/2020/03/index.html","3e232493149db7067f972d896953e13b"],["archives/2020/04/index.html","21f430d01b6a9f9f5f8a393e21be79a4"],["archives/2020/05/index.html","a4da86702ac385604942e41f8877c273"],["archives/2020/08/index.html","f31a7e298d290fb3cca304eecb2a97a2"],["archives/2020/09/index.html","2fbddd821ea1dfb49bb9dab2e313d7f3"],["archives/2020/10/index.html","6cb09735d06235511bf0398b6281cbf5"],["archives/2020/11/index.html","4df6f8d5260a382e67c94c80b7190b59"],["archives/2020/index.html","4a54273561b75430cf57a911810ce1d8"],["archives/2020/page/2/index.html","0fb355edd07b73fe0a9b84003feab488"],["archives/2020/page/3/index.html","86a4a54df9738a1f223da7e83478faed"],["archives/2021/03/index.html","3a2002dfdc26980c0a3f2604f7e480db"],["archives/2021/05/index.html","8c8692bbc195181eb2537f397988453c"],["archives/2021/07/index.html","404fb0866c3ebaa91f4e68aa72935054"],["archives/2021/08/index.html","0b8cb2b80acd9536b8689833c056eb85"],["archives/2021/index.html","b609653b6d585e961848fdb26a1be614"],["archives/2021/page/2/index.html","cad2edb49ee4a2c70f4c389bb86c2b69"],["archives/2022/03/index.html","20807953b97184f0157bf5121edb8a6e"],["archives/2022/index.html","d1564a2a4cf4651b3e90544e0fd15c1b"],["archives/index.html","afe576294e81ba4661ee60db4b73ea08"],["archives/page/2/index.html","afe576294e81ba4661ee60db4b73ea08"],["archives/page/3/index.html","afe576294e81ba4661ee60db4b73ea08"],["archives/page/4/index.html","fcf26e568ef5a5ab95400099f43a5c68"],["archives/page/5/index.html","afe576294e81ba4661ee60db4b73ea08"],["categories/Java/index.html","b50215202e367bbc75d41479e5372e7d"],["categories/Java/page/2/index.html","62ab9d3e9602d86a088b45f33dd40747"],["categories/Java/框架/index.html","0e6b449b79637637f8c4d2cef4eb4cee"],["categories/Linux/index.html","b4a2e62b123574bfbfb1042783c7e10b"],["categories/Machine-Learning/index.html","ec55fc401f0ad251700f3ffe940a220c"],["categories/Machine-Learning/sklearn/index.html","fc560334168a399413d3714a78873c4f"],["categories/Mongodb/index.html","d118a0e1f6476edba42bce24e34b80b6"],["categories/Nginx/index.html","183a4ab8a865ab09f7e1c7312e31ef66"],["categories/Python/index.html","ed37436eb3250ff6970bfe40e8ed593d"],["categories/Python/爬虫/index.html","1c589b982fec5c9052630b421e82d888"],["categories/git/index.html","b013e1621482e6224317d06b765a001c"],["categories/index.html","95a29922cc2c53ec16b72d40abf2833b"],["categories/前端/index.html","94eef270d8367ccbc663772217037db0"],["categories/多线程/index.html","d38e1521596df902ad26cc71aa09d701"],["categories/数据结构与算法/index.html","485e6bd774c29521788c2c2fae9f1004"],["categories/设计模式/index.html","75dbc3cfc97754a5fbeccc43beb5bec3"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","7d71d49defbc5451f1279ca6ba078c0a"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","8bf11798c5e037cd294bf46041968ab1"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","49ae43167286c133de793c9af87bbf35"],["page/2/index.html","3af02887b6d17bd46d6f712a1f1cd5c2"],["page/3/index.html","674195388239752e784a4c949ec0005d"],["page/4/index.html","daef8de421f71373c20f28628e37b6b2"],["page/5/index.html","6de84f6650b1d060037ee7fe6290f6b4"],["photos/index.html","046d057fe83eecd8a629a45bd74362b2"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","e4eafe5ff0f0e172754ecf2e8e08903b"],["tags/Beautifulsoup/index.html","a531ee128d59e393184c71fb0c3ceee7"],["tags/Data-Preprocessing/index.html","80062987d0b08d2adcdbbb51486d731e"],["tags/DecisionTree/index.html","067e37b11f6dd8d4bce60ec8f85762f0"],["tags/Feature-Engineering/index.html","12e927bdb2545006266fc2d6ddcc3eab"],["tags/Filter/index.html","4cfd769cb6c9342fd334335b0d61235f"],["tags/IO流/index.html","86531ad20f36df5490d7286de10a989c"],["tags/JDBC/index.html","d075902ab6eba5e70d683fd04375811c"],["tags/JQuery/index.html","4d9ed613abc17f9b777069e2e7591c03"],["tags/Java/index.html","99d5fb47d0713b5d2571376868cce918"],["tags/JavaScript/index.html","71f0d91c85e928c3af4959cff26787ce"],["tags/JavaWeb/index.html","823f13ade4943941f248394c435b4256"],["tags/Kaggle/index.html","71c35f4826dbe6fd26f8f10681bc9a20"],["tags/Linux/index.html","a84bbbf80055d17d01f6dbd334ad4333"],["tags/MBG/index.html","91cc851c5a62e097929d5a496663956c"],["tags/MVC/index.html","f9c32ad030c091d40225f74d70a61866"],["tags/Mapper/index.html","e04a9ebd00432626bfe260496358e4f8"],["tags/Mongodb/index.html","c7d00519660f2fc383c282b53e170b26"],["tags/MySQL/index.html","4ef94ac6065d23b975f30f8bbbf40e50"],["tags/Mybatis/index.html","0d521352b75ca7d34958a3782a43bad2"],["tags/NIO/index.html","d9444b16e6574a651d45e40f51843aad"],["tags/Nginx/index.html","7bbc2917277300a8f9be59103fa75ca2"],["tags/Python/index.html","891417b1be2a182f216d1aca12ede7d9"],["tags/Request/index.html","6a858570ada25f1ce02ab3769794763f"],["tags/Servlet/index.html","e4389df8a0eb22157c267475f994d035"],["tags/Spring/index.html","df0cb99f944be71bc4e056ec42192584"],["tags/SpringMVC/index.html","699d1a6cfb8fc6b2516fa536c380a074"],["tags/Springboot-starter/index.html","8f556d265fc42ed54aab99dfdcf119f6"],["tags/ThreadLocal/index.html","34730f8b6018af7c4076ebc7a4fa9730"],["tags/VMware/index.html","b1f46d86ffc94308365d43c85c8bef5f"],["tags/conda/index.html","8f1b96d6808d4853cb7d4bb905b8841e"],["tags/git/index.html","104265e0caa73e424cd8f83c1bc513de"],["tags/hexo/index.html","a2da2df26de61cd81a05efd139a70a60"],["tags/index.html","5b9645bfef1f973825a5484bf0cde10f"],["tags/redis/index.html","21efdb9520350e8750b5d1a9b0dc413d"],["tags/sklearn/index.html","a614e4b378c6fda48f7ef9449d301725"],["tags/ssm/index.html","73305e03e496fc562bd58f51a5c5fdae"],["tags/依赖倒置原则/index.html","c24c8d7146a84ae2c0c7201506070b0a"],["tags/前缀树/index.html","4720a0a363568a904ca875d63b92ecad"],["tags/动态代理/index.html","ed46cfb17b84beaa68443b673c4cd651"],["tags/单一职责原则/index.html","1ee8ff6f072de2efea1b6f175c87d3f4"],["tags/单例模式/index.html","3bd274b063344cfd77e4c1e72d0153dc"],["tags/原型模式/index.html","59541170f3ccc539bd160f43863ee3cf"],["tags/反射/index.html","6f1155bce5c01e2ebbd60f018b71cf7a"],["tags/堆排序/index.html","983a6496ba1a55bcf4d5aabf4d8de2af"],["tags/多线程/index.html","db0539dce8cf235e065d270d85e5424e"],["tags/工厂模式/index.html","159677b16e1b5f25d41416f1694e8c33"],["tags/并查集/index.html","f0cb9e00fc059e5c139ad7131490ceb1"],["tags/建造者模式/index.html","3233903a09d5463416f680d1f8230a6b"],["tags/开闭原则/index.html","f0aadc553730d6c1f23ce507bfc42608"],["tags/接口隔离原则/index.html","41158d6d924927dfb516154285411d3f"],["tags/正则表达式/index.html","0ab60e7136680c24665b9f1d2f35ca40"],["tags/源码/index.html","e9a8bc85d980ce7cf54ffe15e7331716"],["tags/爬虫/index.html","ed171ba73f523d0842bbc0fdfce1c7fa"],["tags/组合优于继承原则/index.html","959d0a55af29f8fb735e2294c83285bf"],["tags/表单验证/index.html","e598e18eba353101de0ca5eed8d15867"],["tags/设计模式/index.html","88e7e984cdbd8354db4f23b4e97425ab"],["tags/适配器模式/index.html","2790b254e852fd39a85ec588813c38ae"]];
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







