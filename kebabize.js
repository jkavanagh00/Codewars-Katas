const kebabize = str => str.replace(/\d+/g, '').split(/(?=[A-Z])/).map((word) => word.toLowerCase()).join('-');
