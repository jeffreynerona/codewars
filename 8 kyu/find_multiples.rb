def find_multiples(integer, limit)
  arr = []
  multi = integer
  while integer <= limit
    arr.push(integer)
    integer += multi
  end
  return arr
end