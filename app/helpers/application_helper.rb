module ApplicationHelper
  def default_meta_tags
    {
      site: 'VS MAGIC',
      title: 'トップページ',
      reverse: true,
      charset: 'utf-8',
      description: 'VS MAGICはVSCodeのショートカットキーをゲーム感覚で練習できるアプリです。実際のショートカットキーの挙動が見れるので、駆け出しエンジニアの方でもわかりやすい内容となっています。ショートカットの他にもEmmetも練習できます。',
      keywords: 'VSCode, 駆け出しエンジニア, web制作, web開発, プログラミング初心者',
      canonical: request.original_url,
      separator: '|',
      icon: [
        { href: image_url('favicon.jpg') },
        { href: image_url('favicon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' }
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        image: image_url('ogp.png'),
        local: 'ja-JP'
      },
      twitter: {
        card: 'summary',
        site: '@yasu41193066',
        image: image_url('ogp.png'),
        width: 100,
        height: 100
      }
    }
  end
end
