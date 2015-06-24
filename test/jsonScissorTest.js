var assert = require("assert");
var jsonScissor = require("../../../../library/tools/jsonScissor.js");

describe('jsonScissor', function() {
	describe('#clip()', function() {
		it('should get null', function() {
			var result = jsonScissor.clip(null, {});
			assert.equal(null, result);
		});
		it('should get null', function() {
			var result = jsonScissor.clip(null, []);
			assert.equal(null, result);
		});
		it('should get null', function() {
			var result = jsonScissor.clip(null, null);
			assert.equal(null, result);
		});
	});
});

describe('jsonScissor', function() {
	describe('#clip()', function() {
		var source = {
			des: "source",
			extra: 2
		};
		var source2 = [{
			des: "source",
			extra: 2
		}];
		it('should get source', function() {
			var result = jsonScissor.clip(source, {});
			assert.equal(source, result);
		});
		it('should get source', function() {
			var result = jsonScissor.clip(source, []);
			assert.equal(source, result);
		});
		it('should get source', function() {
			var result = jsonScissor.clip(source, null);
			assert.equal(source, result);
		});
		it('should get source', function() {
			var result = jsonScissor.clip(source, function() {});
			assert.equal(source, result);
		});
		it('should get source', function() {
			var result = jsonScissor.clip(source2, []);
			assert.equal(source2, result);
		});
	});
});

describe('jsonScissor', function() {
	describe('#clip()', function() {
		var plainSource = {
			attr1: 1,
			attr2: "str",
			attr3: [1, 2],
			attr4: null,
			attr5: false
		}
		var tarSample = {
			attr1: 100,
			attr2: "dsds",
			attr5: true
		}
		var expected = {
			attr1: 1,
			attr2: "str",
			attr5: false
		}
		it('should get clipped plain', function() {
			var result = jsonScissor.clip(plainSource, tarSample);
			assert.equal(JSON.stringify(expected), JSON.stringify(result));
		});
	});
});

describe('jsonScissor', function() {
	describe('#clip()', function() {
		var source = {
			attr1: 1,
			attr2: {
				nattr1: 2,
				nattr2: {
					lattr1: 3,
					lattr2: null
				},
				nattr3: "ok",
			},
			attr3: 3
		}

		var tarSample = {
			attr1: 132,
			attr2: {
				nattr1: null,
				nattr2: {
					lattr1: undefined
				}
			}
		}

		var expected = {
			attr1: 1,
			attr2: {
				nattr1: 2,
				nattr2: {
					lattr1: 3,
				}
			}
		}

		it('should get clipped object', function() {
			var result = jsonScissor.clip(source, tarSample);
			assert.equal(JSON.stringify(expected), JSON.stringify(result));
		});
	});
});

describe('jsonScissor', function() {
	describe('#clip()', function() {
		var source = {
			attr1: 1,
			attr2: [{
				nattr1: 2,
				nattr2: {
					lattr1: 3,
					lattr2: null
				},
				nattr3: "ok"
			}, {
				nattr1: 20,
				nattr2: {
					lattr1: 32121,
					lattr2: "wdjoiewo"
				}
			}],
			attr3: 3
		}

		var tarSample = {
			attr1: 132,
			attr2: [{
				nattr1: null,
				nattr2: {
					lattr1: undefined
				}
			}]
		}

		var expected = {
			attr1: 1,
			attr2: [{
				nattr1: 2,
				nattr2: {
					lattr1: 3
				}
			}, {
				nattr1: 20,
				nattr2: {
					lattr1: 32121
				}
			}]
		}

		it('should get clipped object(contains list)', function() {
			var result = jsonScissor.clip(source, tarSample);
			assert.equal(JSON.stringify(expected), JSON.stringify(result));
		});
	});
});