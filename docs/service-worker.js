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

var precacheConfig = [["404.html","f5398556d33672b692f773a52388b4af"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["css/fonts/atkinson-hyperlegible/web-fonts/EOT/Atkinson-Hyperlegible-Bold-102.eot","83f2ffbd4e0959cbc40248d1d1f364f2"],["css/fonts/atkinson-hyperlegible/web-fonts/EOT/Atkinson-Hyperlegible-BoldItalic-102.eot","050ee4796cee3cf573f7cc05b21f5e45"],["css/fonts/atkinson-hyperlegible/web-fonts/EOT/Atkinson-Hyperlegible-Italic-102.eot","34e1e4244673ad6bf86b27c1819a5010"],["css/fonts/atkinson-hyperlegible/web-fonts/EOT/Atkinson-Hyperlegible-Regular-102.eot","3f15544f168672d6ac3db92c3291f66a"],["css/fonts/atkinson-hyperlegible/web-fonts/SVG/Atkinson-Hyperlegible-Bold-102.svg","ae936464f773304286138256706a80a7"],["css/fonts/atkinson-hyperlegible/web-fonts/SVG/Atkinson-Hyperlegible-BoldItalic-102.svg","1524ffe30d3156ea297db773fe7b2163"],["css/fonts/atkinson-hyperlegible/web-fonts/SVG/Atkinson-Hyperlegible-Italic-102.svg","5b5b9e8f102f730299db49ae5d0ed722"],["css/fonts/atkinson-hyperlegible/web-fonts/SVG/Atkinson-Hyperlegible-Regular-102.svg","bcc684764d872fe6e2e26f34af1a1a5e"],["css/fonts/atkinson-hyperlegible/web-fonts/TTF/Atkinson-Hyperlegible-Bold-102.ttf","30bbec33bbf0573611b8d41201038233"],["css/fonts/atkinson-hyperlegible/web-fonts/TTF/Atkinson-Hyperlegible-BoldItalic-102.ttf","d6cba6f6b4b8dcda012866c1f2713168"],["css/fonts/atkinson-hyperlegible/web-fonts/TTF/Atkinson-Hyperlegible-Italic-102.ttf","b681dd1b894dec70cc143f4cc31cae5d"],["css/fonts/atkinson-hyperlegible/web-fonts/TTF/Atkinson-Hyperlegible-Regular-102.ttf","d1b7e6a2fdf4057549af629c0c3d9420"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF/Atkinson-Hyperlegible-Bold-102.woff","ac53eaf573ad53a2a45d7e8a30d67903"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF/Atkinson-Hyperlegible-BoldItalic-102.woff","60b188386f90df513575dd85279a2ae5"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF/Atkinson-Hyperlegible-Italic-102.woff","b9d51f99d4364bbf22474d55a74db2af"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF/Atkinson-Hyperlegible-Regular-102.woff","6a368e1db903aa2fef92c48b2e192ccb"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF2/Atkinson-Hyperlegible-Bold-102a.woff2","9656ca99f40619cea39439b8648831fb"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF2/Atkinson-Hyperlegible-BoldItalic-102a.woff2","0a12c979f0a8b46b68d162d2ab3bb6d9"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF2/Atkinson-Hyperlegible-Italic-102a.woff2","57eb3d950175f379d9c419916307704e"],["css/fonts/atkinson-hyperlegible/web-fonts/WOFF2/Atkinson-Hyperlegible-Regular-102a.woff2","b85cc92ad18b1534a9f1d51ab8faa1bb"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","83be77e82b230a69168990cb6c8d67b7"],["css/styles.css","5776373adf6ae146194a665e83f7d85d"],["guidelines/2.4.2/index.html","4968a436c81ad5e78abada598cfa6607"],["guidelines/2.4.2/index.xml","e6212121924a3b187765c8745068a43b"],["guidelines/3.3.1/index.html","02bc48ca12becb49bd84f80548581c23"],["guidelines/3.3.1/index.xml","6e8511946aa931511f25e49c3e14d4b2"],["guidelines/3.3.2/index.html","0a0070c1bb50d657c299e8df5ef083b5"],["guidelines/3.3.2/index.xml","fac1c3bbbca7addf2d0b5eff793166e3"],["guidelines/index.html","0798e1891ad9fb915f94575f02207831"],["guidelines/index.xml","a7768c55927901896adfb49444aa21de"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/cupper-logo.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/logo.svg","8ca5af36d88bf9c9243ccfc932c7fb67"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","4f369068ee52f5c7ad1f946fe58bcba7"],["index.xml","d1284718ba4d339b1cdd0f939f79b64e"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","70a796de8de7d18e591b971de6798556"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","c8c2c2fa7afcb5b273ad470ea3748962"],["patterns/forms/fieldset/index.html","a135fa8d743514324479474d54fbcb8d"],["patterns/forms/index.html","abbb53fa99116d4c092e99583c588168"],["patterns/forms/index.xml","943e6d3c600459af69fe8e1257e90648"],["patterns/index.html","8ad3ff005fd2114da8d16ac3e0fd26fe"],["patterns/index.xml","f4a41f2efe599e5e6c447c379b88ec4f"],["patterns/page-title/index.html","e54a1d9bab89b63790fdcb9bc0f53e20"],["principles/consider-situation/index.html","e4ab21ce66d099f2e44f670227a391db"],["principles/consider-situation/index.xml","633e17cdb34a2a914b759ce9abea1271"],["principles/index.html","84f1e8a6e1cf7137dad87925f8e9c037"],["principles/index.xml","6f86b021a5b6f899c21cb52b2d99d19f"],["principles/provide-comparable-experience/index.html","ff34cd656093564da23f62d17b1c76fc"],["principles/provide-comparable-experience/index.xml","fa7d2b37f0c379d7518972a7714ee9bd"],["print-version/index.html","b6fde59c1a1462a65076568ce057e1db"],["sitemap.xml","3627c8acdd1c89f36fd0798e7d301643"],["tags/form/index.html","355d838cce88144f0eebb76ba217d840"],["tags/form/index.xml","768c6236cb1b4a0c611bff0f1e2f3243"],["tags/index.html","ec537f32141203f3ef53e94b787c8a42"],["tags/index.xml","0ce3156747ea94b4ecc4df2aedde51a3"],["tags/title/index.html","1ba2638406e3eb8a72e0bb2bae67fa9b"],["tags/title/index.xml","4e459f3f9765bc5a948c8fe9912a0bf1"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


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







