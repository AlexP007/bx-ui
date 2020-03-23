<?php


namespace BxUI\Helper;


use BxUI\Component\{Dismiss, MultiSelect, Cta, Counter, SliderFrame};

/**
 * Class UI
 * @package BxUi\Helper
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class UI
{
    static $instance;

    private final function __construct()
    {
        // Регистрируем свое расширение
        \CJSCore::RegisterExt(
            "bx-ui", [
                "js" => "/local/js/bx-ui/dist/bx-ui.js",
                "rel" => ['core'],
            ]
        );

        // Подключаем расширение
        \CUtil::InitJSCore(['bx-ui']);
    }

    public static function getInstance()
    {
        if (self::$instance) {
            return self::$instance;
        }

        self::$instance = new static;
        return self::$instance;
    }

    public function multiSelect(array $first, array $second, array $container, array $data): string
    {
        return (new MultiSelect([
            'first'     => $first,
            'second'    => $second,
            'container' => $container,
            'data'      => $data,
        ]) )->render();
    }

    public function cta(array $params): string
    {
        return  (new Cta($params) )->render();
    }

    public function counter(string $id, int $content, array $params): string
    {
        $params['id'] = $id;
        $params['content'] = $content;

        return (new Counter($params) )->render();
    }

    public function dismiss(array $params): string
    {
        return (new Dismiss($params) )->render();
    }

    public function sliderFrame(string $url, array $params): string
    {
        $params['url'] = $url;

        return (new SliderFrame($params) )->render();
    }
}
