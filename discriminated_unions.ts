type Log = Warning | Info | Success;

interface Warning {
  type: "warning";
  msg: string;
}

interface Info {
  type: "info";
  msg: string;
}

interface Success {
  type: "success";
  msg: string;
}

function handleMsg(log: Log) {
  switch (log.type) {
    case "warning":
      console.log(log.msg);
      break;

    case "info":
      console.log(log.msg);
      break;

    case "success":
      console.log(log.msg);
      break;
  }
}

const res1 = handleMsg({
  type: "warning",
  msg: "warning",
});

console.log(res1)