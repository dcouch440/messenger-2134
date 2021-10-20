const quickSortById = (list) => {
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i].id < pivot.id) left.push(list[i]);
    else right.push(list[i]);
  }
  return [...quickSortById(left), pivot, ...quickSortById(right)];
};

export default quickSortById;
