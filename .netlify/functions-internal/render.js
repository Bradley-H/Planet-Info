const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/3.svg","assets/6-1.svg","assets/6.svg","assets/Design System.png","assets/Desktop - Earth - 01 - Active.png","assets/Desktop - Earth - 01.png","assets/Desktop - Earth - 02.png","assets/Desktop - Earth - 03.png","assets/Desktop - Jupiter - 01 - Active.png","assets/Desktop - Jupiter - 01.png","assets/Desktop - Jupiter - 02.png","assets/Desktop - Jupiter - 03.png","assets/Desktop - Mars - 01 - Active.png","assets/Desktop - Mars - 01.png","assets/Desktop - Mars - 02.png","assets/Desktop - Mars - 03.png","assets/Desktop - Mercury - 01 - Active.png","assets/Desktop - Mercury - 01.png","assets/Desktop - Mercury - 02.png","assets/Desktop - Mercury - 03.png","assets/Desktop - Saturn - 01 - Active.png","assets/Desktop - Saturn - 01.png","assets/Desktop - Saturn - 02.png","assets/Desktop - Saturn - 03.png","assets/Desktop - Uranus - 01 - Active.png","assets/Desktop - Uranus - 01.png","assets/Desktop - Uranus - 02.png","assets/Desktop - Uranus - 03.png","assets/Desktop - Venus - 01 - Active.png","assets/Desktop - Venus - 01.png","assets/Desktop - Venus - 02.png","assets/Desktop - Venus - 03.png","assets/Mobile - Menu.png","assets/Tablet - Earth.png","assets/Tablet - Jupiter.png","assets/Tablet - Mars.png","assets/Tablet - Mercury.png","assets/Tablet - Neptune.png","assets/Tablet - Saturn.png","assets/Tablet - Uranus.png","assets/Tablet - Venus.png","assets/background-stars.svg","assets/favicon-32x32.png","assets/geology-earth.png","assets/geology-jupiter.png","assets/geology-mars.png","assets/geology-mercury.png","assets/geology-neptune.png","assets/geology-saturn.png","assets/geology-uranus.png","assets/geology-venus.png","assets/icon-chevron.svg","assets/icon-hamburger.svg","assets/icon-source.svg","assets/planet-earth-internal.svg","assets/planet-earth.svg","assets/planet-jupiter-internal.svg","assets/planet-jupiter.svg","assets/planet-mars-internal.svg","assets/planet-mars.svg","assets/planet-mercury-internal.svg","assets/planet-mercury.svg","assets/planet-neptune-internal.svg","assets/planet-neptune.svg","assets/planet-saturn-internal.svg","assets/planet-saturn.svg","assets/planet-uranus-internal.svg","assets/planet-uranus.svg","assets/planet-venus-internal.svg","assets/planet-venus.svg","favicon.ico","favicon.png","json/data.json"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".ico":"image/vnd.microsoft.icon",".json":"application/json"},
	_: {
		entry: {"file":"start-a6e32fe4.js","js":["start-a6e32fe4.js","chunks/index-7aae8aec.js","chunks/index-28f968b1.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
