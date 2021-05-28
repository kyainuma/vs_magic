class ShortcutKeyImageUploader < CarrierWave::Uploader::Base
  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
    'no_image.gif'
  end

  def extension_whitelist
    %w[jpg jpeg gif png]
  end
end
