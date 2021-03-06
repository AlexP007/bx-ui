<?php


namespace BxUI\Helper;


use BxUI\Traits\Thrower;
use BxUI\Component\{
    CounterControl,
    Dismiss,
    InputCounter,
    MultiSelect,
    Cta,
    Counter,
    Opener,
    ModalOpener,
    Modal,
    SliderFrame,
    Tooltip
};

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
    use Thrower;

    static $instance;

    // dismiss
    const DISMISS_HIDE = 'hide';
    const DISMISS_REMOVE = 'remove';

    // counterControl
    const COUNTER_CONTROL_INC = 'inc';
    const COUNTER_CONTROL_DEC = 'dec';

    private final function __construct()
    {
        // Регистрируем свое расширение
        \CJSCore::RegisterExt(
            "bx-ui", [
                "js" => "/local/js/bx-ui/prod/js/bx-ui.js",
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

    public function multiSelect(array $first, array $second, array $container, array $data = []): string
    {
        return (new MultiSelect([
            'first'     => $first,
            'second'    => $second,
            'container' => $container,
            'data'      => $data,
        ]) )->render();
    }

    public function cta(array $params = []): string
    {
        return  (new Cta($params) )->render();
    }

    public function counter(string $id, int $content, array $params = []): string
    {
        $params['id'] = $id;
        $params['content'] = $content;

        return (new Counter($params) )->render();
    }

    public function inputCounter(string $id, int $value, array $params = []): string
    {
        $params['id'] = $id;
        $params['value'] = "$value";

        return (new InputCounter($params) )->render();
    }

    public function dismiss(string $role, array $params = []): string
    {
        self::ensureParameter(in_array($role, ['hide', 'remove']), 'Dismiss role could be only hide or remove');
        $params['role'] = $role;

        return (new Dismiss($params) )->render();
    }

    public function sliderFrame(string $id, string $url, array $params = []): string
    {
        $params['id'] = $id;
        $params['url'] = $url;

        return (new SliderFrame($params) )->render();
    }

    public function counterControl(string $counterId, string $role, array $params = []): string
    {
       self::ensureParameter(in_array($role, ['inc', 'dec']), 'CounterControl role could be only inc or dec');

       $params['counter_id'] = $counterId;
       $params['role'] = $role;

       return (new CounterControl($params) )->render();
    }

    public function modalOpener(string $modalId, string $content, array $params = []): string
    {
        $params['modal'] = $modalId;
        $params['content'] = $content;

        return (new ModalOpener($params) )->render();
    }

    public function opener(string $targetId, string $content, array $params = []): string
    {
        $params['target'] = $targetId;
        $params['content'] = $content;

        return (new Opener($params) )->render();
    }

    public function modal(string $modalId, string $content, array $params = []): string
    {
        $params['id'] = $modalId;
        $params['content'] = $content;

        return (new Modal($params) )->render();
    }

    public function tooltip(string $content, string $tooltip, string $position, array $params = []): string
    {
        self::ensureParameter(in_array($position, ['top', 'bottom']), 'Tooltip position could be only top or bottom');
        $params['content'] = $content;
        $params['tooltip'] = $tooltip;
        $params['position'] = $position;

        return (new Tooltip($params) )->render();
    }
}
