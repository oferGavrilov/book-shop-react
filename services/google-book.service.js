import { utilService } from "./util.service.js"


export const googleBookService = {
    query,
    getDefaultSearch
}


const gUrl = 'https://www.googleapis.com/books/v1/volumes?q='


function query(filterBy = getDefaultSearch()) {
  const url = gUrl + filterBy.txt
  return axios.get((url)).then((res) => res.data.items).then((books)=> {
    return books.map(book => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        language: book.volumeInfo.language,
        pageCount : book.volumeInfo.pageCount,
        publishedDate: book.volumeInfo.publishedDate,
        reviews: [],
        price: utilService.getRandomIntInclusive(0 , 1000),
        thumbnail:book.volumeInfo.imageLinks.thumbnail,
        isOnSale: utilService.getBoolean()
      }
    })
  })
}



// function query(filterBy = getDefaultSearch()) {

//   // return axios.get
//     const items = res.items.map(item => ({
//         id: item.id,
//         title: item.volumeInfo.title,
//         description: item.volumeInfo.description,
//         language: item.volumeInfo.language,
//         pageCount : item.volumeInfo.pageCount,
//         publishedDate: item.volumeInfo.publishedDate,
//         reviews: [],
//         price: utilService.getRandomIntInclusive(0 , 1000),
//         thumbnail:item.volumeInfo.imageLinks.thumbnail,
//         isOnSale: utilService.getBoolean()

//     }))
//     return Promise.resolve(items).then(items => {
//       if(filterBy.txt ){
//         const regex = new RegExp(filterBy.txt , 'i')
//         items = items.filter(item => regex.test(item.title))
//       }
//       return items
//     })
// }

// fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key)
//   .then(response => response.json())
//   .then(result => {
// this.setState({ books: result.items})
// })}

// AIzaSyBkwT6X9K72E8m7omARRi8X6zDJ2K-jcxY

function getDefaultSearch() {
  return {txt : ''}
}



const res = {
    "kind": "books#volumes",
    "totalItems": 525,
    "items": [
      {
        "kind": "books#volume",
        "id": "nBuA0hmspdMC",
        "etag": "I+UV6euqwYU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
        "volumeInfo": {
          "title": "Effective JavaScript",
          "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
          "authors": [
            "David Herman"
          ],
          "publisher": "Addison-Wesley",
          "publishedDate": "2012-11-26",
          "description": "“Its uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. Youll find when you finish the book that youve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. Its one of the few books on JS that Ill recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the languages flexible, expressive features and how to avoid its pitfalls. No matter how long youve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecmas JavaScript standardization committee, illuminates the languages inner workings as never before—helping you take full advantage of JavaScripts expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices youll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. Youll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScripts functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScripts unique “run-to-completion” approach to concurrency",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780132902250"
            },
            {
              "type": "ISBN_10",
              "identifier": "0132902257"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 240,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.7.6.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=javascript+power&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Youll find when you finish the book that youve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "QnlmDwAAQBAJ",
        "etag": "ofliREd00D8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/QnlmDwAAQBAJ",
        "volumeInfo": {
          "title": "The Power of JavaScript",
          "authors": [
            "Derek Miller"
          ],
          "publisher": "Cavendish Square Publishing, LLC",
          "publishedDate": "2017-12-15",
          "description": "JavaScript is characterized by enabling interaction, the language was created so that anyone surfing the internet could engage with a website instantaneously without downloading files or refreshing a page. This book looks at the early history of web browsers, traces the evolution of JavaScript, and explains the many applications of the language today, including Adobe Photoshop and online quizzes.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781502629449"
            },
            {
              "type": "ISBN_10",
              "identifier": "1502629445"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 114,
          "printType": "BOOK",
          "categories": [
            "Juvenile Nonfiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=QnlmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=QnlmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=QnlmDwAAQBAJ&printsec=frontcover&dq=javascript+power&hl=&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=QnlmDwAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Power_of_JavaScript.html?hl=&id=QnlmDwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Power_of_JavaScript-sample-pdf.acsm?id=QnlmDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=QnlmDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This book looks at the early history of web browsers, traces the evolution of JavaScript, and explains the many applications of the language today, including Adobe Photoshop and online quizzes."
        }
      },
      {
        "kind": "books#volume",
        "id": "DaUMAQAAQBAJ",
        "etag": "C+AMi4Au9Tk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/DaUMAQAAQBAJ",
        "volumeInfo": {
          "title": "JavaScript Allongé",
          "subtitle": "A strong cup of functions, objects, combinators, and decorators",
          "authors": [
            "Reginald Braithwaite"
          ],
          "publisher": "Justin Kelly",
          "publishedDate": "2013-10-04",
          "description": "JavaScript Allongé solves two important problems for the ambitious JavaScript programmer. First, JavaScript Allongé gives you the tools to deal with JavaScript bugs, hitches, edge cases, and other potential pitfalls. There are plenty of good directions for how to write JavaScript programs. If you follow them without alteration or deviation, you will be satisfied. Unfortunately, software is a complex thing, full of interactions and side-effects. Two perfectly reasonable pieces of advice when taken separately may conflict with each other when taken together. An approach may seem sound at the outset of a project, but need to be revised when new requirements are discovered. When you “leave the path” of the directions, you discover their limitations. In order to solve the problems that occur at the edges, in order to adapt and deal with changes, in order to refactor and rewrite as needed, you need to understand the underlying principles of the JavaScript programming language in detail. You need to understand why the directions work so that you can understand how to modify them to work properly at or beyond their original limitations. Thats where JavaScript Allongé comes in. JavaScript Allongé is a book about programming with functions, because JavaScript is a programming language built on flexible and powerful functions. JavaScript Allongé begins at the beginning, with values and expressions, and builds from there to discuss types, identity, functions, closures, scopes, and many more subjects up to working with classes and instances. In each case, JavaScript Allongé takes care to explain exactly how things work so that when you encounter a problem, youll know exactly what is happening and how to fix it. Second, JavaScript Allongé provides recipes for using functions to write software that is simpler, cleaner, and less complicated than alternative approaches that are object-centric or code-centric. JavaScript idioms like function combinators and decorators leverage JavaScripts power to make code easier to read, modify, debug and refactor, thus avoiding problems before they happen. JavaScript Allongé teaches you how to handle complex code, and it also teaches you how to simplify code without dumbing it down. As a result, JavaScript Allongé is a rich read releasing many of JavaScripts subtleties, much like the Café Allongé beloved by coffee enthusiasts everywhere. License: CC BY-SA 3.0 Source is available from Github * https://github.com/justinkelly/javascript-allonge",
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 245,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "0.4.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DaUMAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DaUMAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=DaUMAQAAQBAJ&pg=PR3&dq=javascript+power&hl=&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=DaUMAQAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_Allong%C3%A9.html?hl=&id=DaUMAQAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=DaUMAQAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "JavaScript idioms like function combinators and decorators leverage \u003cb\u003eJavaScript&#39;s power\u003c/b\u003e to make code easier to read, modify, debug and refactor, thus avoiding problems before they happen. JavaScriptAllongé teaches you howto handle&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "iTByEAAAQBAJ",
        "etag": "oRP0j0SarcM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/iTByEAAAQBAJ",
        "volumeInfo": {
          "title": "React and React Native",
          "subtitle": "Build cross-platform JavaScript applications with native power for the web, desktop, and mobile",
          "authors": [
            "Adam Boduch",
            "Roy Derks",
            "Mikhail Sakhniuk"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2022-05-30",
          "description": "Fourth Edition of the popular React book, updated to the latest React 18 to help you go from beginner to professional in React applications development Key Features • Discover Reacts latest features including automatic state update batching and prioritizing state updates • Get to grips with React architecture to write cross-platform apps using libraries such as NativeBase • Understand GraphQL and Apollo for building a scalable backend for your applications Book Description Over the years, React and React Native has proven itself among JavaScript developers as a popular choice for a complete and practical guide to the React ecosystem. This fourth edition comes with the latest features, enhancements, and fixes to align with React 18, while also being compatible with React Native. It includes new chapters covering critical features and concepts in modern cross-platform app development with React. From the basics of React to popular components such as Hooks, GraphQL, and NativeBase, this definitive guide will help you become a professional React developer in a step-by-step manner. You'll begin by learning about the essential building blocks of React components. As you advance through the chapters, you'll work with higher-level functionalities in application development and then put your knowledge to work by developing user interface components for the web and native platforms. In the concluding chapters, you'll learn how to bring your application together with robust data architecture. By the end of this book, you'll be able to build React applications for the web and React Native applications for multiple mobile platforms. What you will learn • Explore React architecture, component properties, state, and context • Work with React Hooks for handling functions and components • Implement code splitting using lazy components and Suspense • Build robust user interfaces for mobile and desktop apps using Material-UI • Write shared components for Android and iOS apps using React Native • Simplify layout design for React Native apps using NativeBase • Write GraphQL schemas to power web and mobile apps • Implement Apollo-driven components Who this book is for This book is for any JavaScript developer who wants to start learning how to use React and React Native for mobile and web application development. No prior knowledge of React is required, however working knowledge of JavaScript is necessary to be able to follow along the content covered.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781803249995"
            },
            {
              "type": "ISBN_10",
              "identifier": "1803249994"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 606,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "0.6.5.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=iTByEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=iTByEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=iTByEAAAQBAJ&printsec=frontcover&dq=javascript+power&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=iTByEAAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/React_and_React_Native.html?hl=&id=iTByEAAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=iTByEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "By the end of this book, you&#39;ll be able to build React applications for the web and React Native applications for multiple mobile platforms."
        }
      },
      {
        "kind": "books#volume",
        "id": "jUfnAwAAQBAJ",
        "etag": "APa4uj7f4aQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/jUfnAwAAQBAJ",
        "volumeInfo": {
          "title": "Programming JavaScript Applications",
          "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
          "authors": [
            "Eric Elliott"
          ],
          "publisher": "\"O'Reilly Media, Inc.\"",
          "publishedDate": "2014-06-26",
          "description": "Take advantage of JavaScripts power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code thats easier—yes, easier—to work with as your code base grows. JavaScript may be the most essential web programming language, but in the real world, JavaScript applications often break when you make changes. With this book, author Eric Elliott shows you how to add client- and server-side features to a large JavaScript application without negatively affecting the rest of your code. Examine the anatomy of a large-scale JavaScript application Build modern web apps with the capabilities of desktop applications Learn best practices for code organization, modularity, and reuse Separate your application into different layers of responsibility Build efficient, self-describing hypermedia APIs with Node.js Test, integrate, and deploy software updates in rapid cycles Control resource access with user authentication and authorization Expand your applications reach through internationalization",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781491950272"
            },
            {
              "type": "ISBN_10",
              "identifier": "1491950277"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 253,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=jUfnAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=jUfnAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=jUfnAwAAQBAJ&pg=PP2&dq=javascript+power&hl=&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=jUfnAwAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Programming_JavaScript_Applications.html?hl=&id=jUfnAwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=jUfnAwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Take advantage of \u003cb\u003eJavaScript&#39;s power\u003c/b\u003e to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "t7pgmAEACAAJ",
        "etag": "1vKtsWdyrCg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/t7pgmAEACAAJ",
        "volumeInfo": {
          "title": "Plug-In JavaScript 100 Power Solutions",
          "authors": [
            "Robin Nixon"
          ],
          "publisher": "Mcgraw-hill",
          "publishedDate": "2010-10-07",
          "description": "100 JavaScript power solutions in one handy guide This practical resource contains 100 ready-to-run JavaScript plug-ins you can use to create dynamic Web content. The book begins by explaining JavaScript, Cascading Style Sheets (CSS), and the Document Object Model (DOM). Then, each chapter in Plug-In JavaScript offers complete, working examples for specific end results you can achieve right away. Using these plug-ins, you'll be able to build JavaScript projects quicker and easier than ever, as many complex tasks are reduced to a single function call. Get ready-made JavaScript plug-ins for: Resizing and repositioning objects Fading between objects Movement and animation Chaining and interaction Menus and navigation Text effects Audio and visual effects Cookies, Ajax, and security Forms and validation And much more Download all of the plug-ins at the book's companion website.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0071738614"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780071738613"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 432,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=t7pgmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=t7pgmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=t7pgmAEACAAJ&dq=javascript+power&hl=&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=t7pgmAEACAAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Plug_In_JavaScript_100_Power_Solutions.html?hl=&id=t7pgmAEACAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=t7pgmAEACAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The book begins by explaining JavaScript, Cascading Style Sheets (CSS), and the Document Object Model (DOM). Then, each chapter in Plug-In JavaScript offers complete, working examples for specific end results you can achieve right away."
        }
      },
      {
        "kind": "books#volume",
        "id": "AEOWCwAAQBAJ",
        "etag": "x/Wj2fMn56I",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/AEOWCwAAQBAJ",
        "volumeInfo": {
          "title": "Learning JavaScript",
          "subtitle": "JavaScript Essentials for Modern Application Development",
          "authors": [
            "Ethan Brown"
          ],
          "publisher": "\"O'Reilly Media, Inc.\"",
          "publishedDate": "2016-02-17",
          "description": "This is an exciting time to learn JavaScript. Now that the latest JavaScript specification—ECMAScript 6.0 (ES6)—has been finalized, learning how to develop high-quality applications with this language is easier and more satisfying than ever. This practical book takes programmers (amateurs and pros alike) on a no-nonsense tour of ES6, along with some related tools and techniques. Author Ethan Brown (Web Development with Node and Express) not only guides you through simple and straightforward topics (variables, control flow, arrays), but also covers complex concepts such as functional and asynchronous programming. Youll learn how to create powerful and responsive web applications on the client, or with Node.js on the server. Use ES6 today and transcompile code to portable ES5 Translate data into a format that JavaScript can use Understand the basic usage and mechanics of JavaScript functions Explore objects and object-oriented programming Tackle new concepts such as iterators, generators, and proxies Grasp the complexities of asynchronous programming Work with the Document Object Model for browser-based apps Learn Node.js fundamentals for developing server-side applications",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781491914922"
            },
            {
              "type": "ISBN_10",
              "identifier": "1491914920"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 350,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.6.7.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=AEOWCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=AEOWCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=AEOWCwAAQBAJ&pg=PT123&dq=javascript+power&hl=&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=AEOWCwAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Learning_JavaScript.html?hl=&id=AEOWCwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=AEOWCwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Functions are central to \u003cb\u003eJavaScript&#39;s power\u003c/b\u003e and expressiveness, and this chapter introduces you to their basic usage and mechanics. Every function has a body; this is the collection of statements that compose the function: function&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "6SizCQAAQBAJ",
        "etag": "rL5MC2kJpTw",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/6SizCQAAQBAJ",
        "volumeInfo": {
          "title": "JavaScript Regular Expressions",
          "authors": [
            "Loiane Groner",
            "Gabriel Manricks"
          ],
          "publisher": "Packt Publishing Ltd",
          "publishedDate": "2015-05-28",
          "description": "This book is ideal for JavaScript developers and programmers who work with any type of user entry data and want sharpen their skills to become experts.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781783282265"
            },
            {
              "type": "ISBN_10",
              "identifier": "1783282266"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 112,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.2.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=6SizCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=6SizCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=6SizCQAAQBAJ&printsec=frontcover&dq=javascript+power&hl=&cd=8&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=6SizCQAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_Regular_Expressions.html?hl=&id=6SizCQAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=6SizCQAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This book is ideal for JavaScript developers and programmers who work with any type of user entry data and want sharpen their skills to become experts."
        }
      },
      {
        "kind": "books#volume",
        "id": "zyMUnspbsekC",
        "etag": "JR6FYv7pLns",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/zyMUnspbsekC",
        "volumeInfo": {
          "title": "JavaScript by Example",
          "authors": [
            "Ellie Quigley"
          ],
          "publisher": "Pearson Education",
          "publishedDate": "2010-10-05",
          "description": "The Worlds Easiest Java Script Tutorial—Fully Updated! JavaScript by Example, Second Edition, is the easiest, most hands-on way to learn JavaScript. Legendary programming instructor Ellie Quigley has thoroughly updated her classic book to deliver the skills and information todays JavaScript users need most—including up-to-the-minute coverage of JavaScript programming constructs, CSS, Ajax, JSON, and the latest JavaScript libraries and best practices. Quigley illuminates every technique with focused, classroom-tested code examples, detailed line-by-line explanations, and real program output. This exceptionally clear, easy-to-understand book takes you from your first script to advanced techniques. Its the only JavaScript book youll ever need! New in This Edition End-of-chapter study tools, including classroom-tested labs Programming the DOM More Cascading Style Sheets Introduction to Ajax and JSON Explanation of how to develop interactive Web applications with dynamic, desktop-style interfaces Programmers preparation for HTML 5s breakthrough capabilities This edition has been completely updated and includes many new and completely rewritten code examples; contains fully revised and updated coverage of Cascading Style Sheets (CSS) and the Document Object Model (DOM); and fully covers modern JavaScript concepts, principles, and programming techniques. Thousands of Web developers, administrators, and power users have relied on JavaScript by Example to become expert JavaScript programmers. With this new edition, you can, too—even if youre completely new to JavaScript. After youve become an expert, youll turn to this book constantly as the best source for trustworthy answers, solutions, and code.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780137084760"
            },
            {
              "type": "ISBN_10",
              "identifier": "0137084765"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 1103,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "averageRating": 1,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.8.4.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=zyMUnspbsekC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=zyMUnspbsekC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=zyMUnspbsekC&printsec=frontcover&dq=javascript+power&hl=&cd=9&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=zyMUnspbsekC&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_by_Example.html?hl=&id=zyMUnspbsekC"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=zyMUnspbsekC&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "With this new edition, you can, too—even if youre completely new to JavaScript. After youve become an expert, youll turn to this book constantly as the best source for trustworthy answers, solutions, and code."
        }
      },
      {
        "kind": "books#volume",
        "id": "RUjnAwAAQBAJ",
        "etag": "RqvG0jXmvPU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/RUjnAwAAQBAJ",
        "volumeInfo": {
          "title": "Programming JavaScript Applications",
          "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
          "authors": [
            "Eric Elliott"
          ],
          "publisher": "\"O'Reilly Media, Inc.\"",
          "publishedDate": "2014-06-26",
          "description": "Take advantage of JavaScripts power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code thats easier—yes, easier—to work with as your code base grows. JavaScript may be the most essential web programming language, but in the real world, JavaScript applications often break when you make changes. With this book, author Eric Elliott shows you how to add client- and server-side features to a large JavaScript application without negatively affecting the rest of your code. Examine the anatomy of a large-scale JavaScript application Build modern web apps with the capabilities of desktop applications Learn best practices for code organization, modularity, and reuse Separate your application into different layers of responsibility Build efficient, self-describing hypermedia APIs with Node.js Test, integrate, and deploy software updates in rapid cycles Control resource access with user authentication and authorization Expand your applications reach through internationalization",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781491950258"
            },
            {
              "type": "ISBN_10",
              "identifier": "1491950250"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 254,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.3.4.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=RUjnAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=RUjnAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=RUjnAwAAQBAJ&printsec=frontcover&dq=javascript+power&hl=&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=RUjnAwAAQBAJ&dq=javascript+power&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Programming_JavaScript_Applications.html?hl=&id=RUjnAwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=RUjnAwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "With this book, author Eric Elliott shows you how to add client- and server-side features to a large JavaScript application without negatively affecting the rest of your code."
        }
      }
    ]
  }