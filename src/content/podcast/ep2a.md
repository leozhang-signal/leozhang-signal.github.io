---
title: "Episode02 PartA - How FlexGroup unleashes the full performance potential of a storage cluster."
pubDate: 2026-06-29T13:32:53+08:00
description: "How FlexGroup unleashes the full performance potential of a storage cluster"
tags:
  - podcast
  - data pulse
episodeNumber: 2
duration: "1:08:08"
---

## Episode Summary
What if your storage performance is no longer limited by a single node?

In this episode of Data Pulse, we explore how NetApp FlexGroup distributes workloads across an entire cluster, unlocking the full power of CPUs, cache, networking, and storage resources for true scale-out performance.

在数据规模突破百亿级文件、毫秒级延迟成为刚需的今天，金融、EDA芯片设计、4K/8K渲染等场景正面临存储的"不可能三角"挑战——低延迟、海量规模与高效管理难以兼得。

FlexGroup超大卷以“1+1>2”的聚合架构破局，将分散存储资源聚合成整体，在容量、性能、管理间找到最优解。本期节目聚焦NetApp FlexGroup超大卷技术，揭秘如何让集群性能“火力全开”：容量60PB+;文件4000+亿个；性能2-6倍。

## Topics Discussed

- The difference between FlexGroup extra-large volumes and FlexVol classic volumes
- Why reading speed is faster with FlexGroup
- How FlexGroup improves cluster performance

## Key Insights

- Flexgroup combines multiple smaller flexvols (constitute) spans multiple aggregates and nodes into a super large Volume
- Flexgroup breaks the boundary of flexvol which can only resides on one node
- By doing so, Flexgroup brings 3 big changes:
  - A large volume can span the whole cluster
  - A single name space
  - By leveraging the whole cluster resources, it brings great performance and concurrency

## Takeaways

- Flexgroup is a great fit for some cases like EDA, and for users who need lage volume and great performance
- Flexgroup has implemented a lot of the features in ONTAP, and snapshots, snapmirror, snapvault, QoS, MetroCluster, the whole list can be found on https://docs.netapp.com, and some features are not supported or under development
- Design the flexgroup properly is very important for it to work out of its best

## Links
- Apple Podcast: [Episode02_PartA](https://podcasts.apple.com/cn/podcast/%E7%AC%AC2%E9%9B%86-%E4%B8%8A-%E8%81%8A%E4%B8%80%E8%81%8Aflexgroup%E8%B6%85%E5%A4%A7%E5%8D%B7-%E5%A6%82%E4%BD%95%E8%AE%A9%E9%9B%86%E7%BE%A4%E6%80%A7%E8%83%BD-%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80/id1811048301?i=1000711367212)
- XiaoyuzhouFM: [Episode02_PartA](https://www.xiaoyuzhoufm.com/episode/684137ad6dbe9284e7e1b14d)