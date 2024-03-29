---
title: 'R 语言 ggplot2 和 dplyr 可视化分析'
date: '2024-01-05 23:55:56'
updated: '2024-01-25 23:55:56'
alias:
- /zh/blog/tech/r-ggplot2-dplyr/
categories: 技术
tags:
  - Data
  - R
---

> 因为实习兼职的公司用R，温习如下，示例取自[此项目](https://app.datacamp.com/workspace/w/980fb8cc-bfa9-4071-aea3-ca8b1e3a95a8/edit)。

## 可视化 libraries

```R
library(readr)
library(ggplot2)
library(dplyr)
```

## 导入数据

**将csv导入dataset**

<!-- more -->

```R
Read datasets/confirmed_cases_worldwide.csv into confirmed_cases_worldwide
```

**选择部分数据**

```R
# Filter for China, from Feb 15

china_after_feb15 <- confirmed_cases_china_vs_world %>%
  filter(is_china == "China", date >= "2020-02-15")
```

## 画图

**单组数据**

```R
# Draw a line plot of cumulative cases vs. date
# Label the y-axis

ggplot(confirmed_cases_worldwide, aes(date, cum_cases)) +
  geom_line() +
  ylab("Cumulative confirmed cases")
```

**多组数据**

```R
# Using confirmed_cases_top7_outside_china, draw a line plot of
# cum_cases vs. date, colored by country

ggplot(confirmed_cases_top7_outside_china, aes(date, cum_cases, color = country)) +
  geom_line() +
  ylab("Cumulative confirmed cases")
```

**趋势曲线**

```R
# Modify the plot to use a logarithmic scale on the y-axis

plt_not_china_trend_lin +
  scale_y_log10()

`geom_smooth()` using formula 'y ~ x'
```

---

R语言练习：https://swirlstats.com/faq.html
