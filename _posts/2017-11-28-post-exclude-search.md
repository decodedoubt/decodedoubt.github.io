---
title:  "Exclude Post from Search Index"
search: false
categories: 
  - Jekyll
last_modified_at: 2018-02-19T08:06:00-05:00
image: /assets/images/sunrise-skin-archive.png
---

This post should not appear in the search index because it has the following YAML Front Matter:

```yaml
search: false
```
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN0FUfKf4sOA10ckYlA4I8MB195g20XKhEsQ_UV2nxdUjGjbVQABzgLPzgtHIg72hRPRTOEq_EiLteMPkZgWu-TJORuu30UYZtyJCnwOZk5yDrT-tlXhNCyZ22XX0yZ2zSQktatVoynMQ/s800-rw/structure-of-human-heart.webp" style="margin-left: auto; margin-right: auto;"><img alt="structure-of-human-heart" border="0" data-original-height="356" data-original-width="640" loading="lazy" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN0FUfKf4sOA10ckYlA4I8MB195g20XKhEsQ_UV2nxdUjGjbVQABzgLPzgtHIg72hRPRTOEq_EiLteMPkZgWu-TJORuu30UYZtyJCnwOZk5yDrT-tlXhNCyZ22XX0yZ2zSQktatVoynMQ/s800-rw/structure-of-human-heart.webp" title="structure-of-human-heart"></a></td></tr><tr><td class="tr-caption" style="text-align: center;">Structure of Human Heart</td></tr></tbody></table>
**Note:** `search: false` only works to exclude posts when using Lunr as a search provider.
{: .notice--info}

To exclude files when using Algolia as a search provider add an array to `algolia.files_to_exclude` in your `_config.yml`. For more configuration options be sure to check their [full documentation](https://community.algolia.com/jekyll-algolia/options.html).

```yaml
algolia:
  # Exclude more files from indexing
  files_to_exclude:
    - index.html
    - index.md
    - excluded-file.html
    - _posts/2017-11-28-post-exclude-search.md
    - subdirectory/*.html
```