function powerset(array) {
  const subset = [[]];
	for (const ele of array) {
		const length = subset.length;
		for (i = 0; i < length; i++) {
			const currentSubset = subset[i];
			subset.push(currentSubset.concat(ele));
		}
	}
	return subset
}

// Do not edit the line below.
exports.powerset = powerset;