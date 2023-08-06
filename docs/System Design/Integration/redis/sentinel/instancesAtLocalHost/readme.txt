使用以下指令，在本機啟動 1 Master + 2 Slave of redis.

redis-server ./conf/redis-1.conf
redis-server ./conf/redis-2.conf
redis-server ./conf/redis-3.conf

使用以下指令，在本機啟動 3 sentinel , 監控上面之3個redis node.

redis-server ./conf/redis-sentinel-1.conf --sentinel
redis-server ./conf/redis-sentinel-2.conf --sentinel
redis-server ./conf/redis-sentinel-3.conf --sentinel