[![Build Status](https://travis-ci.org/tkrugg/google-cloud-storage-uri-parser.svg?branch=master)](https://travis-ci.org/tkrugg/google-cloud-storage-uri-parser)


# Usage

```js
const { parse } = require('google-cloud-storage-uri-parser')
const { bucket, file } = parse('gs://my-bucket/my-folder/my-file.txt')
// bucket === 'my-bucket'
// file === 'my-folder/my-file.txt'

```