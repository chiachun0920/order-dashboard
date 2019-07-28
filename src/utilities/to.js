const to = _promise => {
  let promise = _promise;
  if (!(promise instanceof Promise)) {
    promise = Promise.resolve(promise);
  }
  return promise.then(result => [ null, result ]).catch(err => [ err, null ]);
}

export default to;

