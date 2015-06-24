/**
 * json scissor
 *
 * @desciption
 *    When I get a big json data, I do not need so many attibutes, 
 *    so I need a scissor to cut the data.
 * @author  ddchen
 */

var JsonScissor = function() {}
JsonScissor.prototype = {
	/**
	 * sourceJson: source json data
	 * tarSample: provides a simple for target data
	 * config: 
	 * 		  maxDeepth: define the max deepth of recursion
	 */
	clip: function(sourceJson, tarSample, config) {
		if (!config) {
			config = {};
		}
		if (!config.deep) config.deep = 0;
		// boundry
		if (this._detectBoundry(sourceJson, tarSample, config)) {
			return sourceJson;
		}
		// clip children
		sourceJson = this._clipChildren(sourceJson, tarSample, config);
		return sourceJson;
	},
	_clipChildren: function(sourceJson, tarSample, config) {
		if (Array.isArray(sourceJson)) {
			var childSample = tarSample[0];
			for (var i = 0; i < sourceJson.length; i++) {
				var clippedChild = this.clip(sourceJson[i], childSample, config);
				sourceJson[i] = clippedChild;
			}
		} else if (typeof sourceJson === "object") {
			for (attrName in sourceJson) {
				if (!tarSample.hasOwnProperty(attrName)) {
					delete sourceJson[attrName];
				} else {
					// recursion attributes
					sourceJson[attrName] = this.clip(sourceJson[attrName], tarSample[attrName], config);
				}
			}
		}
		return sourceJson;
	},
	_detectBoundry: function(sourceJson, tarSample, config) {
		if (config.maxDeepth) {
			if (config.maxDeepth < config.deep) {
				return true;
			}
		}
		if (this._detectWrongType(tarSample)) {
			return true;
		}
		if (this._isNormal(sourceJson)) {
			return true;
		}
		if (!this._isSameType(sourceJson, tarSample)) {
			// give up clipping
			return true;
		}
		if (Array.isArray(sourceJson) && Array.isArray(tarSample)) {
			if (!tarSample.length) {
				// give up clipping
				return true;
			}
		}
		return false;
	},
	_detectWrongType: function(data) {
		if (typeof data === "function") {
			return true;
		}
		return false;
	},
	_isNormal: function(data) {
		if (data === null || data === undefined) return true;
		if (typeof data === "string") return true;
		if (typeof data === "number") return true;
		if (typeof data === "boolean") return true;
		return false;
	},
	_isSameType: function(data1, data2) {
		if (typeof data1 !== typeof data2) {
			return false;
		}
		if (data1 === null && data2 !== null) {
			return false;
		}
		if (data1 !== null && data2 === null) {
			return false;
		}
		return true;
	}
}

module.exports = JsonScissor;