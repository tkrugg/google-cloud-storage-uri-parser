const {
    parse
} = require('../');
describe('parse', () => {
    const tests = ["gs://mybucket/myfile.json", "gs://my-bucket_with/myfolder/myfile.json", ]
    for (const test of tests) {
        it(`should produce the right bucket and file names for ${test}`, () => {
            expect(parse(test)).toMatchSnapshot()
        })
    }
});