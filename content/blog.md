---
title: My Articles
description: "A collection of articles written by Vivaan Krishna Ponugoti."
pagination:
  data: collections.posts
  size: 10
  reverse: true
permalink: "blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

{%- for item in pagination.items %}
<div class="post-preview">
<a href="{{item.url}}"><h2 class="post-title">{{item.data.title}}</h2></a>
<h3 class="post-subtitle">{{item.data.description}}</h3>
<p class="post-meta">
Written by
<a href="{{metadata.author.url}}">{{item.data.author or metadata.author.name}}</a>
on {% if page.date %}<time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>{% endif %}
</p>
</div>
<hr class="my-4" />
{% endfor -%}

<div class="row mt-3 mb-3">
<div class="col-md-6">
{%- if pagination.href.previous %}<a class="btn btn-primary text-uppercase col-12" href="{{ pagination.href.previous }}">← Previous</a>{% endif %}
</div>
<div class="col-md-6 text-end mb-4">
{%- if pagination.href.next %}<a class="btn btn-primary text-uppercase col-12" href="{{ pagination.href.next }}">Next →</a>{% endif %}
</div>
</div>
