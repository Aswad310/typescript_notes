function getItemLength(name: string): string;
function getItemLength(name: string[]): number;

function getItemLength(nameOrNames: unknown): unknown {
  if (typeof nameOrNames === 'string') {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return nameOrNames.length;
  } else {
    return 0;
  }
}


getItemLength('abc');
getItemLength(['a', 'b', 'c']);