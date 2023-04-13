import HBase from 'hbase-rpc-client';

const config = {
  zookeeperHosts: ['localhost:2181'],
  zookeeperRoot: '/hbase-unsecure',
  rpcTimeout: 30000,
  pingTimeout: 30000,
  callTimeout: 5000
};

const hbaseClient = new HBase(config);

export default hbaseClient;
