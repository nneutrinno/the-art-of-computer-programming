function euclid([m, n]) {
  const r = m % n
  
  if (r === 0) return n

  return euclid([n, r])
}

const greatestCommonDivisor = euclid



