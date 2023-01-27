<?php
//add favicon to header
add_action('wp_head', 'psy_favicon');
function psy_favicon()
{
  echo "<link rel='shortcut icon' href='" . get_stylesheet_directory_uri() . "/assets/media/favicon.png' />" . "\n";
}

//add supermind-style.css
if (!function_exists('supermind_custom_styles')) {
  function supermind_custom_styles()
  {
    wp_enqueue_style('supermind-style', get_stylesheet_directory_uri() . '/supermind-style.css');
  }
  add_action('wp_head', 'supermind_custom_styles');
}

//add supermind-script.js
if (!function_exists('supermind_custom_scripts')) {
  function supermind_custom_scripts()
  {
    wp_enqueue_script('jQuery-library', '//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js');
    wp_enqueue_script('infinite-scroll-scripts', '//unpkg.com/infinite-scroll@4/dist/infinite-scroll.pkgd.min.js');
    wp_enqueue_script('spotify-scripts', '//open.spotify.com/embed-podcast/iframe-api/v1');
    wp_enqueue_script('supermind-scripts', get_stylesheet_directory_uri() . '/supermind-script.js');
  }
  add_action('wp_footer', 'supermind_custom_scripts', 10);
}

//theme stuff
if (!function_exists('supermind_theme_setup')) {
  function supermind_theme_setup()
  {
    add_theme_support('menus');
    add_theme_support('widgets');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('align-wide');
    add_theme_support('core-block-patterns');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
  };

  add_action('init', 'supermind_theme_setup');
}

require_once(get_template_directory() . '/core/slugify.php');
if (is_admin()) {
  require_once(get_template_directory() . '/core/duplicate.php');
} else {
  require_once(get_template_directory() . '/core/disable-emoji.php');
}

//Next post link
function align_post_arr($arr)
{
  $str = "";
  foreach ($arr as $val) {
    $str = $val . ' ' . $str;
  }
  return $str;
}
function getting_next_posts()
{
  // $next_post = get_adjacent_post(false, '', false);
  $arr = array();
  $related = get_posts(
    array(
      // 'category__in'   => wp_get_post_categories($post->ID),
      'posts_per_page' => -1,
      'post__not_in'   => array(get_the_ID())
    )
  );
  if ($related) {
    foreach ($related as $post) {
      setup_postdata($post);
      $slug = $post->post_name;
      array_push($arr, $slug . " ");
    }
    wp_reset_postdata();
  }

  // return '<a class="pagination__next" href= "' . get_permalink($next_post->ID)  . '">This is next post ' .  next_post_link() . ' </a>';

  return '<div class="list-slug">' . align_post_arr($arr) . '</div>';
}
add_shortcode('nextlink', 'getting_next_posts');


function getting_glossary_mode()
{
  if (get_field('dark_mode')) {
    return '<div class="indicate-mode">dark</div>';
  } else {
    return '<div class="indicate-mode">light</div>';
  }
}
add_shortcode('glossarymode', 'getting_glossary_mode');

function getting_color_mode()
{
  $set_color = get_field('color_mode_set');
  switch ($set_color) {
    case "dark":
      return '<div class="indicate-mode-1">dark</div>';
      break;
    case "light":
      return '<div class="indicate-mode-1">light</div>';
      break;
    case "purple":
      return '<div class="indicate-mode-1">purple</div>';
      break;
    case "blue":
      return '<div class="indicate-mode-1">blue</div>';
      break;
    case "yellow":
      return '<div class="indicate-mode-1">yellow</div>';
      break;
    case "plum":
      return '<div class="indicate-mode-1">plum</div>';
      break;
    case "pink":
      return '<div class="indicate-mode-1">pink</div>';
      break;
    case "red":
      return '<div class="indicate-mode-1">red</div>';
      break;
    default:
      return '<div class="indicate-mode-1">dark</div>';
  }
}
add_shortcode('getcolormode', 'getting_color_mode');

function getting_podcast_list()
{
  $output = '<div id="episodes">';
  // Check rows existexists.
  if (have_rows('podcast_list')) :

    // Loop through rows.
    while (have_rows('podcast_list')) : the_row();

      // Load sub field value.
      $podcastTitle = get_sub_field('podcast_title');
      $podcastExcerpt = get_sub_field('podcast_excerpt');
      $linkSpotify = get_sub_field('podcast_list_link');

      // Do something...
      $output .= '<a data-spotify-id="spotify:episode:' . $linkSpotify . '6I3ZzCxRhRkNqnQNo8AZPV">
      <div class="podcastImage">' . get_the_post_thumbnail('') . '</div> <div class="podcastContent">
      <h5 class="podcastTitle">' . $podcastTitle . '</h5> <p class="podcastExcerpt">' . $podcastExcerpt . '</p>
      </div>
      
    </a>';
    // End loop.
    endwhile;

  // No value.
  else :
  // Do something...
  endif;

  $output .= '</div>';
  return $output;
}

add_shortcode('gettingpodcast', 'getting_podcast_list');


function getting_feature_video()
{
  $feature_video = get_field('feature_video');
  if ($feature_video) {
    return '<video width="100%" height="400" autoplay muted loop>
      <source src="' . $feature_video . '" type="video/mp4">
    Your browser does not support the video tag.
    </video>';
  } else {

    return false;
  }
}
add_shortcode('getFeatureVideo', 'getting_feature_video');
